import { SprintState } from "../states/sprintState/sprintState";
import { FinishedSprintState } from "../states/sprintState/finishedSprintState";
import { InProgressSprintState } from "../states/sprintState/inProgressSprintState";
import { ReviewedSprintState } from "../states/sprintState/reviewedSprintState";
import { CreatedSprintState } from "../states/sprintState/createdSprintState";
import { CancelledSprintState } from "../states/sprintState/cancelledSprintState";
import { Backlog } from "./backlog";
import { ReportExportStrategy } from "../reportExportStrategy/reportExportStrategy";
import { Pipeline } from "../pipeline/pipeline";
import { ClosedSprintState } from "../states/sprintState/closedSprintState";
import { ExportReportToPDF } from "../reportExportStrategy/exportReportToPDF";
import { ExportReportToPNG } from "../reportExportStrategy/exportReportToPNG";
import { ProductOwner } from "../users/productOwner";

export class Sprint {
    private createdSprintState: SprintState;
    private inProgressSprintState: SprintState;
    private finishedSprintState: SprintState;
    private reviewedSprintState: SprintState;
    private cancelledSprintState: SprintState;
    private closedSprintState: SprintState;

    private _state: SprintState;
    private sprintBacklog: Backlog;
    private productBacklog: Backlog;
    private pipeline: Pipeline;

    private name: string;
    private startDate: Date;
    private endDate: Date;
    private productOwner: ProductOwner;
    private reportExportStrategy: ReportExportStrategy;

    constructor(
        name: string,
        startDate: Date, 
        endDate: Date, 
        sprintBacklog: Backlog, 
        productBacklog: Backlog,
        pipeline: Pipeline,
        productOwner: ProductOwner) 
    {
        this.createdSprintState = new CreatedSprintState(this);
        this.inProgressSprintState = new InProgressSprintState(this);
        this.finishedSprintState = new FinishedSprintState(this);
        this.reviewedSprintState = new ReviewedSprintState(this);
        this.cancelledSprintState = new CancelledSprintState(this);
        this.closedSprintState = new ClosedSprintState(this);

        this._state = this.createdSprintState;
        this.sprintBacklog = sprintBacklog;
        this.productBacklog = productBacklog;
        this.pipeline = pipeline;

        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.productOwner = productOwner;
        this.reportExportStrategy = new ExportReportToPDF();
    }

    public exportReport(isPDF: boolean): void {
        this.reportExportStrategy = isPDF
            ? new ExportReportToPDF()
            : new ExportReportToPNG();
        console.log(this.reportExportStrategy.exportReport(this));
    }

    public addSprintBacklogItem(index: number): void {
        this._state.addSprintBacklogItem(index);
    }

    public editSprint(): void {
        this._state.editSprint();
    }

    public nextState(): void {
        this._state.nextState();
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

    public getClosedSprintState(): CancelledSprintState {
        return this.closedSprintState;
    }

    public getProductBacklog(): Backlog {
        return this.productBacklog;
    }

    public getSprintBacklog(): Backlog {
        return this.sprintBacklog;
    }

    public getName(): string {
        return this.name;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date {
        return this.endDate;
    }
    
    public getProductOwner(): ProductOwner { 
        return this.productOwner;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setStartDate(startDate: Date): void {
        this.startDate = startDate;
    }

    public setEndDate(endDate: Date): void {
        this.endDate = endDate;
    }

    public getPipeline(): Pipeline {
        return this.pipeline;
    }
}
