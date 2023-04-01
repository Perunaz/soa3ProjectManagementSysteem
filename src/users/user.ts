import { EmailService } from "../messenger/emailService";

export interface User { 
    id: number;
    name: string;
    prefferedMessageService: EmailService;

    getId(): number;
    getName(): string;
    getMessageService(): EmailService;
}