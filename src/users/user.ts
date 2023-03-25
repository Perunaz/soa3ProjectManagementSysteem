import { MessageService } from "../messenger/messageService";

export interface User { 
    id: number;
    name: string;
    prefferedMessageService: MessageService;

    getId(): number;
    getName(): string;
    getMessageService(): MessageService;
}