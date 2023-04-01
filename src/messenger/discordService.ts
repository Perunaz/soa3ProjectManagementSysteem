export class DiscordService {
    sendDiscordMessage(name: string, body: string): void {
        console.log(`Sending discord message to ${name}: ${body}`);
    }
}