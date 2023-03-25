import { MessageService } from "../messenger/messageService";
import { User } from "./user";

export class ProductOwner implements User{
    id: number;
    name: string;
    messageService: MessageService

    constructor(id: number, name: string, messageService: MessageService) {
        this.id = id
        this.name = name;
        this.messageService = messageService;
    }

    sendNotification(notification: string) {
        this.messageService.sendMessage(notification);
    }
}