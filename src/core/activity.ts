export class Activity {
    private developerId: number;
    private description: string;
    private done: boolean = false;
    private activityId: number;

    constructor(developerId: number, activityId: number, description: string) { 
        this.developerId = developerId;
        this.activityId = activityId;
        this.description = description;
    }

    public markAsDone(): void { 
        this.done = true;
    }

    public getDone(): boolean {
        return this.done;
    }

    public getActivityId(): number { 
        return this.activityId;
    }
}