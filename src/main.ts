import { Backlog } from "./core/backlog";
import { Item } from "./core/item";
import { Project } from "./core/project";
import { ProjectManagement } from "./core/projectManagement";
import { Sprint } from "./core/sprint";
import { DiscordService } from "./messenger/discordService";
import { EmailService } from "./messenger/emailService";
import { MessengerAdapter } from "./messenger/messengerAdapter";
import { ExportReportToPDF } from "./reportExportStrategy/exportReportToPDF";
import { ReadyForTestingItemState } from "./states/itemStates/readyForTestingItemState";

let reportExportStrategy = new ExportReportToPDF();
let backlog = new Backlog();
let sprint = new Sprint("Sprint1", reportExportStrategy, backlog);

let projectManagement = new ProjectManagement(sprint);
let project = new Project(projectManagement);


let discordService = new DiscordService();
let emailService = new EmailService();
let adapter = new MessengerAdapter(discordService);