import { Sprint } from "../core/sprint";
import { ReportExportStrategy } from "./reportExportStrategy";

export class ExportReportToPNG implements ReportExportStrategy {
  exportReport(sprint: Sprint): void {
    console.log(`Exporting report to PNG for sprint: ${sprint.getName()}`);
  }
}
