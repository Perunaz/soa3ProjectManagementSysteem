import { ProjectManagement } from "./projectManagement";

export class Project {
    private projectManagement: ProjectManagement;

    constructor(projectManagement: ProjectManagement) { 
        this.projectManagement = projectManagement;
    }

    getProjectManagement(): ProjectManagement { 
        return this.projectManagement;
    }
}