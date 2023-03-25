import { MessageService } from "./messageService";

export class DiscordService implements MessageService {
    sendMessage(name: string, body: string): void {
        console.log(`Sending discord message to ${name}: ${body}`);
    }

}