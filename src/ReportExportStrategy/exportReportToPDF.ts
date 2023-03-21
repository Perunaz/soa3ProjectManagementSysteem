import { Sprint } from "../core/sprint";
import { ReportExportStrategy } from "./reportExportStrategy";

export class ExportReportToPDF implements ReportExportStrategy {
    exportReport(sprint: Sprint): void {
        throw new Error("Method not implemented.");
    }
}