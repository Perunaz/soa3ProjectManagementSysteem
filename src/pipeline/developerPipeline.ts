import { Pipeline } from "./pipeline";

export class DeveloperPipeline extends Pipeline{
    public build(): void {
        console.log("DeveloperPipeline.build()");
    }

    public finish(): void {
        console.log("DeveloperPipeline.finish()");
    }
}