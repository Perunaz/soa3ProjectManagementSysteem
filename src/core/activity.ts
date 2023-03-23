export class Activity {
    private developerId: number;
    private description: string;
    private done: boolean = false;
    activityId: number;

    constructor(developerId: number, activityId: number, description: string) { 
        this.developerId = developerId;
        this.activityId = activityId;
        this.description = description;
    }

    markAsDone(): void { 
        this.done = true;
    }
}