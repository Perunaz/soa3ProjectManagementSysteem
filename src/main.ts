import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";
import { ExportReportToPDF } from "./ReportExportStrategy/exportReportToPDF";

let reportExportStrategy = new ExportReportToPDF();
let sprint = new Sprint("Sprint1", reportExportStrategy);
let projectManagement = new ProjectManagement(sprint);
let project = new Project(projectManagement);
