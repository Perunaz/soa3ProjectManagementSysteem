export class EmailService{
    sendEmailMessage(name: string, body: string): void {
        console.log(`Sending email message to ${name}: ${body}`);
    }
}
