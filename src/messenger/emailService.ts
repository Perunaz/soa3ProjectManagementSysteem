import { MessageService } from "./messageService";

export class EmailService implements MessageService {
    sendMessage(name: string, body: string): void {
        console.log(`Sending email message to ${name}: ${body}`);
    }

}
