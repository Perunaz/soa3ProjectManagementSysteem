import { Sprint } from "../../core/sprint";
import { SprintState } from "./sprintState";

export class InProgressSprintState implements SprintState {
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
    nextState(): void {
        this.sprint.setState(this.sprint.getFinishedSprintState());
    }
}