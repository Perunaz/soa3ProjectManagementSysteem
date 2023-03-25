import { Component } from "./component";
import { Visitor } from "./visitor";

export class Comment extends Component {
    private commentText: string;
    private visitorId: number;

    constructor(commentText: string, visitorId: number) {
        super();
        this.commentText = commentText;
        this.visitorId = visitorId;
    }

    getCommentText(): string {
        return this.commentText;
    }

    getVisitorId(): number {
        return this.visitorId;
    }

    acceptVisitor(visitor: Visitor): void {
        visitor.visitComment(this);
    }
}