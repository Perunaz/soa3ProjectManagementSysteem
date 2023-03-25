import { MessageService } from "./messageService";

export class WhatsappService implements MessageService {
    sendMessage(name: string, body: string): void {
        console.log(`Sending whatsapp message to ${name}: ${body}`);
    }

}

