import { MessageService } from "./messageService";

export class MessengerAdapter {
  private static instance: MessengerAdapter;
  private messageService: MessageService;

  private constructor(adaptee: MessageService) {
    this.messageService = adaptee;
  }

  public static getInstance(adaptee: MessageService): MessageService {
    if (!MessengerAdapter.instance) {
      MessengerAdapter.instance = new MessengerAdapter(adaptee);
    }
    return MessengerAdapter.instance;
  }

  setAdaptee(adaptee: MessageService) {
    this.messageService = adaptee;
  }

  sendMessage(name: string, body: string): void {
    this.messageService.sendMessage(name, body);
  }
}

