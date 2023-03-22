import { Backlog } from "../src/core/backlog";
import { Project } from "../src/core/project";
import { ProjectManagement } from "../src/core/projectManagement";
import { Sprint } from "../src/core/sprint";
import { ExportReportToPNG } from "../src/reportExportStrategy/exportReportToPNG";

test("should have sprint inside project", () => {
	let reportExportStrategy = new ExportReportToPNG();
	let backlog = new Backlog();
	let sprint = new Sprint("Sprint1", reportExportStrategy, backlog);
	let projectManagement = new ProjectManagement(sprint);
	let project = new Project(projectManagement);

	let projectManagement2 = project.getprojectManagement();
	let sprints = projectManagement2.getSprints();

	expect(sprints.length).toBe(1); 
});

test("should change sprint state (WIP)", () => { 
	let reportExportStrategy = new ExportReportToPNG();
	let backlog = new Backlog();
	let sprint = new Sprint("Sprint1", reportExportStrategy, backlog);
	sprint.setState(sprint.getInProgressSprintState())

	expect(sprint.getState()).toBe(sprint.getInProgressSprintState()); 
});