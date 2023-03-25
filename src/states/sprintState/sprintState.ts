import { Backlog } from "../../core/backlog";
import { Sprint } from "../../core/sprint";
import { ProductOwner } from "../../users/productOwner";

export interface SprintState {
    sprint: Sprint;

    addSprintBacklogItem(index: number): void;

    editSprint(name?: string, startDate?: Date, endDate?: Date): void;

    nextState(productOwner?: ProductOwner): void;
}