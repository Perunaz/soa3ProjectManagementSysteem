import { MessageService } from "./messageService";

export class WhatsappService implements MessageService {
    sendMessage(body: string): void {
        console.log(`Sending whatsapp message: ${body}`);
    }

}

