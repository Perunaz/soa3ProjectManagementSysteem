import { CompositeComponent } from "./compositeComponent";
import { Visitor } from "./visitor";

export class Thread extends CompositeComponent {
    private title: string;


    constructor(title: string) {
        super();
        this.title = title
    }

    getThreadTitle(): string {
        return this.title;
    }

    acceptVisitor(visitor: Visitor): void {
        visitor.visitThread(this);
        super.acceptVisitor(visitor);
    }
}