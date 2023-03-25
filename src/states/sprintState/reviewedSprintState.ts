import { Sprint } from "../../core/sprint";
import { ProductOwner } from "../../users/productOwner";
import { SprintState } from "./sprintState";

export class ReviewedSprintState implements SprintState {
    sprint: Sprint;

    constructor(_sprint: Sprint) {  
        this.sprint = _sprint;
    }

    addSprintBacklogItem(index: number): void {
        console.log("can't add items to sprint backlog in this state");
    }
    editSprint(): void {
        console.log("can't edit sprint in this state");
    }
    nextState(productOwner: ProductOwner): void {
        if(this.sprint.getPipeline().isReleased()) {
            this.sprint.setState(this.sprint.getClosedSprintState());
        } else {
            productOwner.getMessageService().sendMessage(productOwner.getName(), "Pipeline failed to release")
        }
    }
}