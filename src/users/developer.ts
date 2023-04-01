import { User } from "./user";
import { Activity } from "../core/activity";
import { Item } from "../core/item";
import { Backlog } from "../core/backlog";
import { Visitor } from "../itemThread/visitor";
import { Thread } from "../itemThread/thread";
import { Comment } from "../itemThread/comment";
import { EmailService } from "../messenger/emailService";

export class Developer extends Visitor implements User{
    id: number;
    name: string;
    isTester: boolean;
    prefferedMessageService: EmailService;

    constructor(id: number, name: string, isTester: boolean, messageService: EmailService) {
        super();
        this.id = id;
        this.name = name;
        this.isTester = isTester;
        this.prefferedMessageService = messageService;
    }

    public createItem(backlog: Backlog, id: number, description: string) {
        let item = new Item(id, this.id, description);
        backlog.addItem(item);
    }

    public createActivity(item: Item, activityId: number, description: string) {
        let activity = new Activity(this.id, activityId, description);
        item.createActivity(activity);
    }

    public visitItem(item: Item): void {
        console.log("=".repeat(item.getDescription().length + 14));
        console.log("~~~ Item: " + item.getDescription() + " ~~~");
        console.log("=".repeat(item.getDescription().length + 14));
    }

    public visitThread(thread: Thread): void {
        console.log(" " + "=".repeat(thread.getThreadTitle().length + 16));
        console.log(" ~~~ Thread: " + thread.getThreadTitle() + " ~~~");
        console.log(" " + "=".repeat(thread.getThreadTitle().length + 16));
    }
    
    public visitComment(comment: Comment): void {
        console.log("  " + comment.getDeveloperName() + ": " + comment.getCommentText());
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getIsTester(): boolean { 
        return this.isTester
    }

    getMessageService(): EmailService {
        return this.prefferedMessageService;
    }
}