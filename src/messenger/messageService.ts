import { EmailService } from "./emailService";

export class MessageService {

  constructor(){};

  sendMessage(emailService: EmailService, name: string, body: string): void{
    emailService.sendEmailMessage(name, body)
  };
}