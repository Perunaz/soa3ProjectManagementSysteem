import { Sprint } from "./sprint";

export class ProjectManagement {
    private sprint: Sprint[] = [];

    constructor(sprint: Sprint) { 
        this.sprint.push(sprint);
    }


}