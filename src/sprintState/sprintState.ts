import { Sprint } from "../core/sprint";

export interface SprintState {
    isReviewable: boolean;
    sprint: Sprint;

    addSprint(): void;

    removeSprint(): void;

    editSprint(): void;

    deleteSprint(): void;
}