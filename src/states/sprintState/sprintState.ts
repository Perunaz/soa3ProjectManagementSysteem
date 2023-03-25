import { Backlog } from "../../core/backlog";
import { Sprint } from "../../core/sprint";

export interface SprintState {
    sprint: Sprint;

    addSprintBacklogItem(index: number): void;

    editSprint(name?: string, startDate?: Date, endDate?: Date): void;

    nextState(): void;
}