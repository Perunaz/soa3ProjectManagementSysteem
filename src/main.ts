import { Backlog } from "./core/backlog";
import { Item } from "./core/item";
import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";
import { Thread } from "./itemThread/thread";
import { Comment } from "./itemThread/comment";
import { DiscordService } from "./messenger/discordService";
import { EmailService } from "./messenger/emailService";
import { DeveloperPipeline } from "./pipeline/developerPipeline";
import { Pipeline } from "./pipeline/pipeline";
import { ExportReportToPDF } from "./reportExportStrategy/exportReportToPDF";
import { ReadyForTestingItemState } from "./states/itemStates/readyForTestingItemState";
import { Developer } from "./users/developer";
import { ProductOwner } from "./users/productOwner";
import { CodeArchive } from "./core/codeArchive";
import { DiscordMessengerAdapter } from "./messenger/discordMessengerAdapter";
import { WhatsappService } from "./messenger/whatsappService";
import { WhatsappMessengerAdapter } from "./messenger/whatsappMessengerAdapter";

let backlog = new Backlog();
let sprintBacklog = new Backlog();
let pipeline = new DeveloperPipeline();
let emailMessageService = new EmailService();
let discordService = new DiscordService();
let discordMessageService = DiscordMessengerAdapter.getInstance(discordService);
let whatsappService = new WhatsappService();
let whatsappMessageService  = WhatsappMessengerAdapter.getInstance(whatsappService);
let developers: Developer[] = [new Developer(1, "Caelan", false, discordMessageService), new Developer(2, "Joep", false, emailMessageService)];
let productOwner = new ProductOwner(1, "Rob the Product Owner", whatsappMessageService);
let scrumMaster = developers[0];
let main = new CodeArchive("Main");

let projectManagement = new ProjectManagement(productOwner, developers, main, backlog);
let project = new Project(projectManagement);
projectManagement.addSprint("sprint 1", new Date(), new Date(), sprintBacklog, pipeline, scrumMaster);
let sprint = projectManagement.getSprints()[0];

sprint.nextState();
sprint.nextState();
sprint.nextState();
sprint.nextState();

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

sprint.exportReport(true);