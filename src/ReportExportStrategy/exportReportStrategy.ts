import { Sprint } from "../core/sprint";

export interface ExportReportStrategy {
    
    exportReport(sprint: Sprint): void;
}