import { Sprint } from "./sprint";

export class ProjectManagement {
    private sprints: Sprint[] = [];

    constructor(sprint: Sprint) { 
        this.sprints.push(sprint);
    }

    getSprints(): Sprint[] { 
        return this.sprints
    }
}