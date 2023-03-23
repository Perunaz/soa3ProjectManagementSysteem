import { MessageService } from "./messageService";

export class EmailService implements MessageService {
    sendMessage(body: string): void {
        console.log(`Sending email message: ${body}`);
    }

}
