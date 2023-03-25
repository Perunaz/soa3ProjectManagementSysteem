import { MessageService } from "../messenger/messageService";
import { User } from "./user";

export class ProductOwner implements User{
    id: number;
    name: string;
    prefferedMessageService: MessageService;

    constructor(id: number, name: string, messageService: MessageService) {
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

    getMessageService(): MessageService {
        return this.prefferedMessageService;
    }
}