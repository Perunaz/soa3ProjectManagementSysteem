import { EmailService } from "../messenger/emailService";
import { MessageService } from "../messenger/messageService";

export interface User { 
    id: number;
    name: string;
    prefferedMessageService: EmailService;

    getId(): number;
    getName(): string;
    getMessageService(): EmailService;
}