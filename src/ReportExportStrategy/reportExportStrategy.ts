import { Sprint } from "../core/sprint";

export interface ReportExportStrategy {
    
    exportReport(sprint: Sprint): void;
}