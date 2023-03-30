import { ProjectManagement } from "./projectManagement";

export class Project {
    private static instance: Project;
    private projectManagement: ProjectManagement;

    private constructor(projectManagement: ProjectManagement) { 
        this.projectManagement = projectManagement;
    }

    public static getInstance(projectManagement: ProjectManagement): Project {
        if (!Project.instance) {
            Project.instance = new Project(projectManagement);
        }
        return Project.instance;
    }

    getProjectManagement(): ProjectManagement { 
        return this.projectManagement;
    }
}