import { Component } from "./component";
import { Visitor } from "./Visitor";

export class CompositeComponent extends Component {
    private parts: Component[];

    constructor() {
        super();
        this.parts = [];
    }

    addComponent(component: Component): void { 
        this.parts.push(component);
    }

    getComponent(index: number): Component {
        return this.parts[index];
    }

    getSize(): number {
        return this.parts.length;
    }

    acceptVisitor(visitor: Visitor): void {
        this.parts.forEach((component: Component) => component.acceptVisitor(visitor));
    }
}