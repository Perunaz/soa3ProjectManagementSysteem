export class WhatsappService {
    sendWhatsappMessage(name: string, body: string): void {
        console.log(`Sending whatsapp message to ${name}: ${body}`);
    }

}

