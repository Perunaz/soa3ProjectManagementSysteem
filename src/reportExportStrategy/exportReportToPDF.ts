import { Sprint } from "../core/sprint";
import { ReportExportStrategy } from "./reportExportStrategy";

export class ExportReportToPDF implements ReportExportStrategy {
    exportReport(sprint: Sprint): void {
        console.log(`Exporting report to PDF for sprint: ${sprint.getName()}`);
    }
}