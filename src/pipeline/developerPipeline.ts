import { Pipeline } from "./pipeline";

export class DeveloperPipeline extends Pipeline{
    
    constructor() {
        super();
    }

  build(): boolean {
    console.log("Pipeline.build()");
    this.installPackages();
    this.buildCode();
    this.runTests();
    console.log("Pipeline.release()");
    return true;
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