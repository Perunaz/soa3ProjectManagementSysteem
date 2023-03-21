import { Project } from "../src/core/project";
import { ProjectManagement } from "../src/core/projectManagement";
import { Sprint } from "../src/core/sprint";
import { ExportReportToPDF } from "../src/reportExportStrategy/exportReportToPDF";

test("should have sprint inside project", () => {
	let reportExportStrategy = new ExportReportToPDF();
	let sprint = new Sprint("Sprint1", reportExportStrategy);
	let projectManagement = new ProjectManagement(sprint);
	let project = new Project(projectManagement);

	let projectManagement2 = project.getprojectManagement();
	let sprints = projectManagement2.getSprints();

	expect(sprints.length).toBe(1);
});