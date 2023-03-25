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
    this.deploy();
    this.setReleased(true);
    console.log("Pipeline.release()");

    // Notificatie naar scrum master en product owner via messenger
    console.log("Notifying Scrum Master and Product Owner of release");
  }

  releaseSprint(): void {
    if (this.isReleased() === false) {
      console.log("Cannot release sprint: pipeline has not been built");
      return;
    }
    console.log("Sprint has been released and is now closed");

    // Notificatie naar scrum master en product owner
    console.log("Notifying Scrum Master and Product Owner of sprint closure");
  }

  cancelRelease(): void {
    if (this.isReleased() === false) {
      console.log("Cannot cancel release: pipeline has not been built");
      return;
    }

    console.log("Release has been cancelled");

    // Notificatie naar scrum master
    console.log("Notifying Scrum Master of release cancellation");
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