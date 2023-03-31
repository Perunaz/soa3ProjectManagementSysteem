import { Pipeline } from "./pipeline";

export class DeveloperPipeline extends Pipeline{
    
    constructor() {
        super();
    }

  build(): void {
    console.log("Pipeline.build()");
    this.installPackages();
    this.buildCode();
    this.runTests();
    console.log("Pipeline.release()");

    // Notificatie naar scrum master en product owner via messenger
    console.log("Notifying Scrum Master and Product Owner of release");
  }

  installPackages(): void {
    console.log("Installing packages...");
  }

  buildCode(): void {
    console.log("Building code...");
  }

  runTests(): void {
    console.log("Running tests...");
  }

  deploy(): void {
    console.log("Deploying...");
  }
}