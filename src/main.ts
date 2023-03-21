import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";

let sprint = new Sprint("Sprint1");
let projectManagement = new ProjectManagement(sprint);
let project = new Project(projectManagement);

project.printProject();