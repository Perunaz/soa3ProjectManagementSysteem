import { Item } from "../core/item";
import { Thread } from "./thread";
import { Comment } from "./comment";

export abstract class Visitor {
    public abstract visitItem(item: Item): void;

    public abstract visitThread(thread: Thread): void;

    public abstract visitComment(comment: Comment): void;
}