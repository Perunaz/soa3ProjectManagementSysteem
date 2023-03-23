import { User } from "./user";
import { Activity } from "../core/activity";
import { Item } from "../core/item";
import { Backlog } from "../core/backlog";
import { Visitor } from "../itemThread/Visitor";
import { Thread } from "../itemThread/thread";
import { Comment } from "../itemThread/comment";

export class Developer extends Visitor implements User{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        super();
        this.id = id
        this.name = name;
    }

    public createItem(backlog: Backlog, id: number) {
        let item = new Item(id, this.id);
        backlog.addItem(item);
    }

    public createActivity(item: Item, activityId: number, description: string) {
        let activity = new Activity(this.id, activityId, description);
        item.createActivity(activity);
    }

    public visitItem(item: Item): void {
        
    }

    public visitThread(thread: Thread): void {
        
    }
    
    public visitComment(comment: Comment): void {
        
    }
}