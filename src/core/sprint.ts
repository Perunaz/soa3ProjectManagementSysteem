import { SprintState } from "../sprintState/sprintState";
import { FinishedSprintState } from "../sprintState/states/finishedSprintState";
import { InProgressSprintState } from "../sprintState/states/inProgressSprintState";
import { ReviewedSprintState } from "../sprintState/states/reviewedSprintState";
import { CreatedSprintState } from "../sprintState/states/createdSprintState";
import { CancelledSprintState } from "../sprintState/states/cancelledSprintState";

export class Sprint {
    private createdSprintState: SprintState;
    private inProgressSprintState: SprintState;
    private finishedSprintState: SprintState;
    private reviewedSprintState: SprintState;
    private cancelledSprintState: SprintState;

    private _state: SprintState;

    private name: string;

    constructor(name: string) { 
        this.createdSprintState = new CreatedSprintState(this);
        this.inProgressSprintState = new InProgressSprintState(this);
        this.finishedSprintState = new FinishedSprintState(this);
        this.reviewedSprintState = new ReviewedSprintState(this);
        this.cancelledSprintState = new CancelledSprintState(this);

        this.name = name;
        this._state = this.createdSprintState;

    }
}