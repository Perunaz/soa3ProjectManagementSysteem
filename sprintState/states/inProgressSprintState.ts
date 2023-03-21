import { sprintState } from "../sprintState";

export class inProgressSprintState implements sprintState {
    isReviewable: boolean;

    constructor(isReviewable: boolean) { 
        this.isReviewable = isReviewable;
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