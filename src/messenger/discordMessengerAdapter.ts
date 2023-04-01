import { DiscordService } from "./discordService";
import { EmailService } from "./emailService";

export class DiscordMessengerAdapter extends EmailService{
  private static instance: DiscordMessengerAdapter;
  private messageService: DiscordService;

  private constructor(adaptee: DiscordService) {
    super();
    this.messageService = adaptee;
  }

  static getInstance(discordService: DiscordService): DiscordMessengerAdapter { 
    if (this.instance == null) {
      this.instance = new DiscordMessengerAdapter(discordService);
    }
    return this.instance;
  }

  sendMessage(name: string, body: string): void {
    this.messageService.sendDiscordMessage(name, body);
  }
}

