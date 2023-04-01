import { Backlog } from "../src/core/backlog";
import { CodeArchive } from "../src/core/codeArchive";
import { Item } from "../src/core/item";
import { Project } from "../src/core/project";
import { ProjectManagement } from "../src/core/projectManagement";
import { Thread } from "../src/itemThread/thread";
import { Comment } from "../src/itemThread/comment";
import { EmailService } from "../src/messenger/emailService";
import { Developer } from "../src/users/developer";
import { ProductOwner } from "../src/users/productOwner";

describe.each([
    [
      new ProductOwner(1, "Rob the product owner", new EmailService()),
      [new Developer(1, "Caelan", false, new EmailService()), new Developer(2, "Joep", false, new EmailService())],
      new CodeArchive("main"),
      new Backlog()

    ]
  ])("Project", (productOwner, developers, codeArchive, productBacklog) => {
    let projectManagement: ProjectManagement;
    let project: Project;
    
    beforeEach(() => {
      projectManagement = new ProjectManagement(productOwner, developers, codeArchive, productBacklog);
      project = new Project(projectManagement);
    });

    test("project should be created", () => {
        expect(project).toBeInstanceOf(Project);
    }); 

    test("should be able to have discussion", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        let item = new Item(1, 2, "make template");
        let itemThread1 = new Thread("is this really needed?");

        item.addComponent(itemThread1);
        itemThread1.addComponent(new Comment("I think so yes!", projectManagement.getDevelopers()[0].getName()));
        itemThread1.addComponent(new Comment("I don't think so.", projectManagement.getDevelopers()[1].getName()));
        item.acceptVisitor(projectManagement.getDevelopers()[0]);

        expect(logSpy).toHaveBeenCalledTimes(8);
        logSpy.mockRestore();
    });
    
    test("Code Archive should function", () => {
        codeArchive = projectManagement.getCodeArchives()[0];

        codeArchive.push(["some code", "more code"]);
        console.log(codeArchive.pull())

        expect(codeArchive.getBranchName()).toBe("main");
        expect(codeArchive.pull()).toStrictEqual(['some code','more code']);
    });
});