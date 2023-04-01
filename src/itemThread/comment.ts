import { Component } from "./component";
import { Visitor } from "./visitor";

export class Comment extends Component {
    private commentText: string;
    private developerName: string;

    constructor(commentText: string, developerName: string) {
        super();
        this.commentText = commentText;
        this.developerName = developerName;
    }

    getCommentText(): string {
        return this.commentText;
    }

    getDeveloperName(): string {
        return this.developerName;
    }

    acceptVisitor(visitor: Visitor): void {
        visitor.visitComment(this);
    }
}