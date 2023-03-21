import { Backlog } from "./core/backlog";
import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";
import { ExportReportToPDF } from "./reportExportStrategy/exportReportToPDF";

let reportExportStrategy = new ExportReportToPDF();
let backlog = new Backlog();
let sprint = new Sprint("Sprint1", reportExportStrategy, backlog);
let projectManagement = new ProjectManagement(sprint);
let project = new Project(projectManagement);