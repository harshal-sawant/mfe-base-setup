import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Inject, VERSION } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  standalone: false,
})
export class MyComponent {
  version = VERSION.full;
  sharedData$: any;
  ngDestroy$ = new Subject();

  constructor(@Inject('AUTH_SERVICE') public authService: any) {
    // Initialization logic can go here
  }

  async ngOnInit() {
    // Method 1 - Set service in app-module.ts provider and get via @Inject in constructor
    console.log(this.authService.getToken());

    // Method 2 - Use loadRemoteModule to get shared state
    const mod = await loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      type: 'module',
      exposedModule: './SharedState',
    });
    this.sharedData$ = mod.sharedData$;
    this.sharedData$.pipe(takeUntil(this.ngDestroy$)).subscribe((data: any) => {
      console.log('Reading in Remote 2:', data);
    });

    this.sharedData$.next({
      message: 'Message sent from Remote 2!',
      time: new Date(),
    });
  }

  ngOnDestroy() {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
