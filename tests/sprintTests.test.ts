import { Backlog } from "../src/core/backlog";
import { Project } from "../src/core/project";
import { ProjectManagement } from "../src/core/projectManagement";
import { Sprint } from "../src/core/sprint";
import { ExportReportToPNG } from "../src/reportExportStrategy/exportReportToPNG";
import { ProductOwner } from "../src/users/productOwner";
import { Pipeline } from "../src/pipeline/pipeline";
import { DeveloperPipeline } from "../src/pipeline/developerPipeline";
import { EmailService } from "../src/messenger/emailService";
import { Item } from "../src/core/item";
import { describe } from '@jest/globals';
import { Developer } from "../src/users/developer";
 
describe.each([
  [
    "Sprint1",
    new Date(2023, 4, 1),
    new Date(2023, 4, 7),
    new Backlog(),
    new Backlog(),
    new DeveloperPipeline(),
    new ProductOwner(1, "John Doe", new EmailService()),
    [new Developer(1, "Caelan", false, new EmailService()), new Developer(2, "Joep", false, new EmailService())]
  ]
])("Sprint", (name, startDate, endDate, backlog, sprintBacklog, pipeline, productOwner, developers) => {
  let sprint: Sprint;
  let item: Item;
  
  beforeEach(() => {
    backlog = new Backlog();
    pipeline = new DeveloperPipeline();
    productOwner = new ProductOwner(1, "John Doe", new EmailService());
    developers = [new Developer(1, "Caelan", false, new EmailService()), new Developer(2, "Joep", false, new EmailService())];
    sprint = new Sprint(
      "Sprint1",
      new Date(2023, 4, 1),
      new Date(2023, 4, 7),
      backlog,
      backlog,
      pipeline,
      productOwner,
      developers,
      developers[0]
    );
    item = new Item(3, 2);
  });
  
  test("should start in the Created state", () => {
    expect(sprint.getState().constructor.name).toBe("CreatedSprintState");
  }); 
  
  test("should be able to add items to the sprint backlog", () => {
    const item = new Item(1,2);
    backlog.addItem(item);
    
    sprint.addSprintBacklogItem(0);
    expect(sprint.getSprintBacklog().getItem(0)).toBe(item);
  });
  
  test("should be able to edit the sprint details", () => {
    sprint.editSprint();
    sprint.setName("Sprint2");
    sprint.setStartDate(new Date(2023, 4, 8));
    sprint.setEndDate(new Date(2023, 4, 14));
    const item = new Item(1, 2);
    sprint.getProductBacklog().addItem(item);
    sprint.setState(sprint.getInProgressSprintState());
    
    expect(sprint.getName()).toBe("Sprint2");
    expect(sprint.getStartDate()).toEqual(new Date(2023, 4, 8));
    expect(sprint.getEndDate()).toEqual(new Date(2023, 4, 14));
    expect(sprint.getProductBacklog().getItem(0)).toBe(item);
    expect(sprint.getState().constructor.name).toBe("InProgressSprintState");
  });
  
  test("should be able to change state to the next state", () => {
    sprint.nextState();
    expect(sprint.getState().constructor.name).toBe("InProgressSprintState");
  
    sprint.nextState();
    expect(sprint.getState().constructor.name).toBe("FinishedSprintState");
  
    sprint.nextState();
    expect(sprint.getState().constructor.name).toBe("ReviewedSprintState");
  
    sprint.nextState();
    expect(sprint.getState().constructor.name).toBe("ClosedSprintState");
  });

// test("should have sprint inside project", () => {
// 	let reportExportStrategy = new ExportReportToPNG();
// 	let backlog = new Backlog();
// 	let sprint = new Sprint("Sprint1", reportExportStrategy, backlog);
// 	let projectManagement = new ProjectManagement(sprint);
// 	let project = new Project(projectManagement);

// 	let projectManagement2 = project.getprojectManagement();
// 	let sprints = projectManagement2.getSprints();

// 	expect(sprints.length).toBe(1); 


// test("should change sprint state (WIP)", () => { 
// 	let reportExportStrategy = new ExportReportToPNG();
// 	let backlog = new Backlog();
// 	let sprint = new Sprint("Sprint1", reportExportStrategy, backlog);
// 	sprint.setState(sprint.getInProgressSprintState())

// 	expect(sprint.getState()).toBe(sprint.getInProgressSprintState()); 
});