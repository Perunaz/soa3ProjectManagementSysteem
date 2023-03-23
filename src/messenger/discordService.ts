import { MessageService } from "./messageService";

export class DiscordService implements MessageService {
    sendMessage(body: string): void {
        console.log(`Sending discord message: ${body}`);
    }

}