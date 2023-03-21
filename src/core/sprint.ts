import { SprintState } from "../sprintState/sprintState";
import { FinishedSprintState } from "../sprintState/states/finishedSprintState";
import { InProgressSprintState } from "../sprintState/states/inProgressSprintState";
import { ReviewedSprintState } from "../sprintState/states/reviewedSprintState";
import { CreatedSprintState } from "../sprintState/states/createdSprintState";
import { CancelledSprintState } from "../sprintState/states/cancelledSprintState";
import { ReportExportStrategy } from "../reportExportStrategy/reportExportStrategy";

export class Sprint {
    private createdSprintState: SprintState;
    private inProgressSprintState: SprintState;
    private finishedSprintState: SprintState;
    private reviewedSprintState: SprintState;
    private cancelledSprintState: SprintState;

    private _state: SprintState;

    private name: string;
    private reportExportStrategy: ReportExportStrategy;

    constructor(name: string, reportExportStrategy: ReportExportStrategy) { 
        this.createdSprintState = new CreatedSprintState(this);
        this.inProgressSprintState = new InProgressSprintState(this);
        this.finishedSprintState = new FinishedSprintState(this);
        this.reviewedSprintState = new ReviewedSprintState(this);
        this.cancelledSprintState = new CancelledSprintState(this);

        this._state = this.createdSprintState;

        this.name = name;
        this.reportExportStrategy = reportExportStrategy;
    }

    public setState(state: SprintState): void {
		this._state = state;
	}

    public getState(): SprintState { 
        return this._state;
    }

    public getCreatedSprintState(): CreatedSprintState { 
        return this.createdSprintState;
    }

    public getInProgressSprintState(): InProgressSprintState {
        return this.inProgressSprintState;
    }

    public getFinishedSprintState(): FinishedSprintState {
        return this.finishedSprintState;
    }

    public getReviewedSprintState(): ReviewedSprintState {
        return this.reviewedSprintState;
    }

    public getCancelledSprintState(): CancelledSprintState {
        return this.cancelledSprintState;
    }
}