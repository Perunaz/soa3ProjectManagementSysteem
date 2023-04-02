import { Sprint } from "../../core/sprint";
import { DeveloperPipeline } from "../../pipeline/developerPipeline";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { SprintState } from "./sprintState";

export class ReviewedSprintState implements SprintState {
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
        if(this.sprint.getPipeline().isReleased() || this.sprint.getPipeline() instanceof DeveloperPipeline) {
            this.productOwner.getMessageService().sendEmailMessage(this.productOwner.getName(), "Pipeline succeeded!")
            this.sprint.setState(this.sprint.getClosedSprintState());
        } else {
            this.productOwner.getMessageService().sendEmailMessage(this.productOwner.getName(), "Pipeline failed to release!")
            this.sprint.setState(this.sprint.getCancelledSprintState());
        }
    }
}