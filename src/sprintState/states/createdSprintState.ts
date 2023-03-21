import { SprintState } from "../sprintState";
import { Sprint } from "../../core/sprint";

export class CreatedSprintState implements SprintState {
    isReviewable: boolean;
    sprint: Sprint;

    constructor(_sprint: Sprint) {  
        this.sprint = _sprint;
        this.isReviewable = false;
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