import { EmailService } from "../messenger/emailService";
import { MessageService } from "../messenger/messageService";
import { User } from "./user";

export class ProductOwner implements User{
    id: number;
    name: string;
    prefferedMessageService: EmailService;

    constructor(id: number, name: string, messageService: EmailService) {
        this.id = id
        this.name = name;
        this.prefferedMessageService = messageService;
    }
    
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getMessageService(): EmailService {
        return this.prefferedMessageService;
    }
}