import { SprintState } from "../states/sprintState/sprintState";
import { FinishedSprintState } from "../states/sprintState/finishedSprintState";
import { InProgressSprintState } from "../states/sprintState/inProgressSprintState";
import { ReviewedSprintState } from "../states/sprintState/reviewedSprintState";
import { CreatedSprintState } from "../states/sprintState/createdSprintState";
import { CancelledSprintState } from "../states/sprintState/cancelledSprintState";
import { Backlog } from "./backlog";
import { ReportExportStrategy } from "../reportExportStrategy/reportExportStrategy";
import { Pipeline } from "../pipeline/pipeline";

export class Sprint {
    private createdSprintState: SprintState;
    private inProgressSprintState: SprintState;
    private finishedSprintState: SprintState;
    private reviewedSprintState: SprintState;
    private cancelledSprintState: SprintState;

    private _state: SprintState;
    private backlog: Backlog;
    private pipeline: Pipeline;

    private name: string;
    private reportExportStrategy: ReportExportStrategy;

    constructor(name: string, reportExportStrategy: ReportExportStrategy, backlog: Backlog, pipeline: Pipeline) { 
        this.createdSprintState = new CreatedSprintState(this);
        this.inProgressSprintState = new InProgressSprintState(this);
        this.finishedSprintState = new FinishedSprintState(this);
        this.reviewedSprintState = new ReviewedSprintState(this);
        this.cancelledSprintState = new CancelledSprintState(this);

        this._state = this.createdSprintState;
        this.backlog = backlog;
        this.pipeline = pipeline;

        this.name = name;
        this.reportExportStrategy = reportExportStrategy;
    }

    public addSprint(): void {
        this._state.addSprint();
    }

    public removeSprint(): void {
        this._state.removeSprint();
    }

    public editSprint(): void {
        this._state.editSprint();
    }

    public deleteSprint(): void {
        this._state.deleteSprint();
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
