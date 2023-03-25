import { Backlog } from "./core/backlog";
import { Item } from "./core/item";
import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";
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
let developer: Developer[] = [new Developer(1, "Developer", false, messageService)];
let productOwner = new ProductOwner(1, "Product Owner", messageService);
let sprint = new Sprint("Sprint 1", new Date(), new Date(), backlog, sprintBacklog, pipeline);

let projectManagement = new ProjectManagement(productOwner, developer);
let project = new Project(projectManagement);


let discordService = new DiscordService();
let emailService = new EmailService();
let adapter = new MessengerAdapter(discordService);

sprint.exportReport(true);