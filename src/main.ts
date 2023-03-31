import { Backlog } from "./core/backlog";
import { Item } from "./core/item";
import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";
import { Thread } from "./itemThread/thread";
import { Comment } from "./itemThread/comment";
import { DiscordService } from "./messenger/discordService";
import { EmailService } from "./messenger/emailService";
import { MessengerAdapter } from "./messenger/messengerAdapter";
import { DeveloperPipeline } from "./pipeline/developerPipeline";
import { Pipeline } from "./pipeline/pipeline";
import { ExportReportToPDF } from "./reportExportStrategy/exportReportToPDF";
import { ReadyForTestingItemState } from "./states/itemStates/readyForTestingItemState";
import { Developer } from "./users/developer";
import { ProductOwner } from "./users/productOwner";

let backlog = new Backlog();
let sprintBacklog = new Backlog();
let pipeline = new DeveloperPipeline();
let messageService = new EmailService();
let developers: Developer[] = [new Developer(1, "Caelan", false, messageService), new Developer(2, "Joep", false, messageService)];
let productOwner = new ProductOwner(1, "Product Owner", messageService);
let sprint = new Sprint("Sprint 1", new Date(), new Date(), backlog, sprintBacklog, pipeline);


let projectManagement = new ProjectManagement(productOwner, developers);
let project = new Project(projectManagement);

let item = new Item(1, projectManagement.getDevelopers()[0].getId());
let itemThread1 = new Thread("is this really needed?");
item.addComponent(itemThread1);
itemThread1.addComponent(new Comment("I think so yes!", projectManagement.getDevelopers()[0].getName()));
itemThread1.addComponent(new Comment("I don't think so.", projectManagement.getDevelopers()[1].getName()));
let itemThread2 = new Thread("I need some help with this!");
item.addComponent(itemThread2);
itemThread2.addComponent(new Comment("I think I can help.", projectManagement.getDevelopers()[1].getName()));
itemThread2.addComponent(new Comment("Nice!", projectManagement.getDevelopers()[0].getName()));

item.acceptVisitor(projectManagement.getDevelopers()[0]);

let discordService = new DiscordService();
let emailService = new EmailService();
let adapter = MessengerAdapter.getInstance(discordService);

sprint.exportReport(true);