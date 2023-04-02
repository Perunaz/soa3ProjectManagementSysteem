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
import { MainPipeline } from "../src/pipeline/mainPipeline";
import { Activity } from "../src/core/activity";
 
describe.each([
  [
    "Sprint1",
    new Date(2023, 4, 1),
    new Date(2023, 4, 7),
    new Backlog(),
    new DeveloperPipeline(),
    new ProductOwner(1, "John Doe", new EmailService()),
    new Developer(1, "Robert", true, new EmailService()),
    [new Developer(1, "Caelan", true, new EmailService), new Developer(2, "Joep", false, new EmailService)]
   ]
])("Sprint", (name, startDate, endDate, backlog, pipeline, productOwner, scrumMaster, developers) => {
  let sprint: Sprint;
  let item: Item;
  
  beforeEach(() => {
    developers = [new Developer(1, "Caelan", true, new EmailService), new Developer(2, "Joep", false, new EmailService)];
    backlog = new Backlog();
    pipeline = new DeveloperPipeline();
    productOwner = new ProductOwner(1, "John Doe", new EmailService());
    sprint = new Sprint(
      name,
      startDate,
      endDate,
      backlog,
      pipeline,
      productOwner,
      scrumMaster
    );
    item = new Item(3, 2, "make template");
  });
  
  test("should start in the Created state", () => {
    expect(sprint.getState().constructor.name).toBe("CreatedSprintState");
  }); 
  
  test("should be able to add items to the sprint backlog", () => {
    const item = new Item(1,2, "make template");
    backlog.addItem(item);
    
    sprint.addSprintBacklogItem(0);
    expect(sprint.getSprintBacklog().getItem(0)).toBe(item);
  });
  
  test("should be able to edit the sprint details", () => {
    sprint.editSprint("Sprint2", new Date(2023, 4, 8), new Date(2023, 4, 14));
    sprint.setState(sprint.getInProgressSprintState());
    
    expect(sprint.getName()).toBe("Sprint2");
    expect(sprint.getStartDate()).toEqual(new Date(2023, 4, 8));
    expect(sprint.getEndDate()).toEqual(new Date(2023, 4, 14));
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

  test("should run pipelines", () => {
    let developerPipeline = pipeline
    let mainPipeline = new MainPipeline();

    expect(developerPipeline.build()).toBe(true);
    expect(mainPipeline.build()).toBe(true);
  });

  test("should add item to backlog", () => {
    const item = new Item(1, 1, "make template");

    backlog.addItem(item);
    
    expect(backlog.getItem(0)).toBe(item);
  });

  test("should have activity support in item", () => {
    const item = new Item(1, 1, "make template");
    const activity = new Activity(2, 1, "add header")
    item.createActivity(activity);
    
    expect(item.checkActivities()).toBe(false);

    item.finishActivity(1);

    expect(item.checkActivities()).toBe(true);
    expect(item.getActivities().length).toBe(1);
  })

  test("should not be able to get item to done state.", () => {
    const item = new Item(1, 1, "make template");
    const activity = new Activity(2, 1, "add header")
    item.createActivity(activity);
    
    expect(item.checkActivities()).toBe(false);

    item.nextState(developers, developers[0]);

    expect(item.getState().constructor.name).toBe("DoingItemState");

    item.nextState(developers, developers[0]);

    expect(item.getState().constructor.name).toBe("TodoItemState");
  })

  test("should be able to get item to done state.", () => {
    const item = new Item(1, 1, "make template");
    const activity = new Activity(2, 1, "add header");
    item.createActivity(activity);
    
    expect(item.checkActivities()).toBe(false);
    item.nextState(developers, developers[0]);

    item.finishActivity(1);
    expect(item.checkActivities()).toBe(true);

    expect(item.getState().constructor.name).toBe("DoingItemState");
    item.nextState(developers, developers[0]);
    expect(item.getState().constructor.name).toBe("ReadyForTestingItemState");
    item.nextState(developers, developers[0]);
    expect(item.getState().constructor.name).toBe("TestingItemState");
    item.testItem(true, developers[0]);
    expect(item.getState().constructor.name).toBe("TestedItemState");
    item.testItem(true, developers[0]);
    expect(item.getState().constructor.name).toBe("DoneItemState");
  });

  test("should notify scrumMaster when going back to todoState", () => {
    const logSpy = jest.spyOn(global.console, 'log');
    const item = new Item(1, 1, "make template");
    const activity = new Activity(2, 1, "add header")
    item.createActivity(activity);

    expect(item.checkActivities()).toBe(false);

    item.nextState(developers, developers[0]);

    expect(item.getState().constructor.name).toBe("DoingItemState");

    item.nextState(developers, developers[0]);

    expect(item.getState().constructor.name).toBe("TodoItemState");

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Sending email message to Caelan: Item back to ToDo state!");
    logSpy.mockRestore();
  });

  test("should notify testers when item is ready for testing", () => {
    const logSpy = jest.spyOn(global.console, 'log');
    const item = new Item(1, 1, "make template");

    item.nextState(developers, developers[0]);

    expect(item.getState().constructor.name).toBe("DoingItemState");

    item.nextState(developers, developers[0]);

    expect(item.getState().constructor.name).toBe("ReadyForTestingItemState");

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Sending email message to Caelan: Pls test item: 1");
    logSpy.mockRestore();
  });

  test("should export to pdf", () => {
    const logSpy = jest.spyOn(global.console, 'log');

    sprint.exportReport(true);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Exporting report to PDF for sprint: Sprint1");
    logSpy.mockRestore();
  });

  test("should export to png", () => {
    const logSpy = jest.spyOn(global.console, 'log');

    sprint.exportReport(false);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Exporting report to PNG for sprint: Sprint1");
    logSpy.mockRestore();
  });
});