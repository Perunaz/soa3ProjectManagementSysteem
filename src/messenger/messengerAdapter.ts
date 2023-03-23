import { MessageService } from "./messageService";
import { MessengerInterface } from "./messengerInterface";
import { DiscordService } from "./discordService";
import { EmailService } from "./emailService";
import { WhatsappService } from "./whatsappService";

export class MessengerAdapter implements MessengerInterface {

  private messageService: MessageService;

  constructor(adaptee: MessageService) {
    this.messageService = adaptee;
    
  }
  notifySprintCreated(): void {
    this.messageService.sendMessage("Sprint created");
  }
  notifySprintCancelled(): void {
    this.messageService.sendMessage("Sprint cancelled");
  }
  notifySprintFinished(): void {
    this.messageService.sendMessage("Sprint created");
  }
  notifyToDoItem(): void {
    this.messageService.sendMessage("Sprint created");
  }

  notifyDoingItem(): void {
    this.messageService.sendMessage("Sprint created");
  }

  notifyDoneItem(): void {
    this.messageService.sendMessage("Sprint created");
  }
}

