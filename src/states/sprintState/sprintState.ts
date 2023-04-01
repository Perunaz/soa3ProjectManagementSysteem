import { Backlog } from "../../core/backlog";
import { Sprint } from "../../core/sprint";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";

export interface SprintState {
    sprint: Sprint;
    productOwner: ProductOwner;
    scrumMaster: Developer;

    addSprintBacklogItem(index: number): void;

    editSprint(name?: string, startDate?: Date, endDate?: Date): void;

    nextState(): void;
}