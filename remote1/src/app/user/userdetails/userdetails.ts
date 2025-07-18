import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  standalone: false,
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.scss',
})
export class Userdetails {
  sharedData$: any;
  ngDestroy$ = new Subject();

  constructor(@Inject('AUTH_SERVICE') public authService: any) {
    console.log('authService', authService);
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
      console.log('Reading in Remote 1:', data);
    });

    this.sharedData$.next({
      message: 'Message sent from Remote 1!',
      time: new Date(),
    });
  }

  ngOnDestroy() {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
