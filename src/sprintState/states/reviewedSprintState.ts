import { Sprint } from "../../core/sprint";
import { SprintState } from "../sprintState";

export class ReviewedSprintState implements SprintState {
    isReviewable: boolean;
    private state: Sprint;

    constructor(_state: Sprint) {  
        this.state = _state;

    }

    addSprint(): void {
        throw new Error("Method not implemented.");
    }
    removeSprint(): void {
        throw new Error("Method not implemented.");
    }
    editSprint(): void {
        throw new Error("Method not implemented.");
    }
    deleteSprint(): void {
        throw new Error("Method not implemented.");
    }
}