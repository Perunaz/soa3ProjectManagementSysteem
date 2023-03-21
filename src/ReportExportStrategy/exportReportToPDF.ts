import { Sprint } from "../core/sprint";
import { ExportReportStrategy } from "./exportReportStrategy";

export class ExportReportToPDF implements ExportReportStrategy {
    exportReport(sprint: Sprint): void {
        throw new Error("Method not implemented.");
    }
}