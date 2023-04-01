import { Sprint } from "../../core/sprint";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { SprintState } from "./sprintState";

export class CancelledSprintState implements SprintState {
    sprint: Sprint;
    productOwner: ProductOwner;
    scrumMaster: Developer;

    constructor(_sprint: Sprint, productOwner: ProductOwner, scrumMaster: Developer) {  
        this.sprint = _sprint;
        this.productOwner = productOwner;
        this.scrumMaster = scrumMaster;
    }

    addSprintBacklogItem(index: number): void {
        console.log("can't add items to sprint backlog in this state");
    }
    editSprint(): void {
        console.log("can't edit sprint in this state");
    }
    nextState(): void {
        console.log("sprint can't go to next state from this state");
    }
}