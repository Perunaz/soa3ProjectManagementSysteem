import { Sprint } from "../../core/sprint";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { SprintState } from "./sprintState";

export class CreatedSprintState implements SprintState {
    sprint: Sprint;
    productOwner: ProductOwner;
    scrumMaster: Developer;

    constructor(_sprint: Sprint, productOwner: ProductOwner, scrumMaster: Developer) {  
        this.sprint = _sprint;
        this.productOwner = productOwner;
        this.scrumMaster = scrumMaster;
    }

    addSprintBacklogItem(index: number): void {
        let itemToAdd = this.sprint.getProductBacklog().getItem(index);
        this.sprint.getSprintBacklog().addItem(itemToAdd)
    }

    editSprint(name?: string, startDate?: Date, endDate?: Date): void {
        if(name) {
            this.sprint.setName(name);
        }
        if(startDate) {
            this.sprint.setStartDate(startDate);
        }
        if(endDate) { 
            this.sprint.setEndDate(endDate);
        }
    }

    nextState(): void {
        this.sprint.setState(this.sprint.getInProgressSprintState());
    }
}