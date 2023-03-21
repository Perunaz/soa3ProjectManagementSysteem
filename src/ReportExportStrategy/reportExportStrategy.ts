import { Sprint } from "../core/sprint";

export interface ReportExportStrategy {
    
    export(sprint: Sprint): void;
}