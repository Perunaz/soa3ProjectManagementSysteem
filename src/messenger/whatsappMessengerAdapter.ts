import { EmailService } from "./emailService";
import { WhatsappService } from "./whatsappService";

export class WhatsappMessengerAdapter extends EmailService{
  private static instance: WhatsappMessengerAdapter;
  private messageService: WhatsappService;

  private constructor(adaptee: WhatsappService) {
    super();
    this.messageService = adaptee;
  }

  static getInstance(whatsappService: WhatsappService): WhatsappMessengerAdapter { 
    if (this.instance == null) {
      this.instance = new WhatsappMessengerAdapter(whatsappService);
    }
    return this.instance;
  }

  sendMessage(name: string, body: string): void {
    this.messageService.sendWhatsappMessage(name, body);
  }
}

