export interface SprintState {
    isReviewable: boolean;

    addSprint(): void;

    removeSprint(): void;

    editSprint(): void;

    deleteSprint(): void;
}