import { MessageService } from "./messageService";

export class MessengerAdapter {

  private messageService: MessageService;

  constructor(adaptee: MessageService) {
    this.messageService = adaptee;
  }

  sendMessage(body: string): void {
    this.messageService.sendMessage(body);
  }
}

