# ⚙️ MFE Base Setup

A foundational starter repository for building **microfrontend applications** using **Webpack Module Federation** and **RxJS BehaviorSubject** for inter-app communication. Includes a host and a remote Angular app, showcasing state sharing between them.

---

## 🧩 Architecture Overview

Host App (Angular)
└── Dynamically loads → Remote App (Angular)
└── Uses shared BehaviorSubject to communicate with Host

- **Host**: Shell application that loads remotes at runtime.
- **Remote**: Standalone microfrontend exposing its component(s) to the Host.
- **Shared State Service**: Enables cross-app communication using RxJS.

---

## 🧠 Key Features

- Webpack 5 Module Federation setup (host ➝ remote)
- Angular integration with `@angular-architects/module-federation`
- Shared `BehaviorSubject` for real-time state sharing
- Typed communication via shared service
- Automatic loading of remote components via `loadRemoteModule`
- Ready‐to‐use CLI commands for starting apps



---

 Tools & Tech
Angular 20+

Webpack 5 with Module Federation Plugin

@angular-architects/module-federation

RxJS for reactive messaging

TypeScript, TS typing, and Angular CLI

