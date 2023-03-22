import { Item } from "./item";

export class Backlog{
    private item: Item[];

    constructor() {
        this.item = [];
    }

    public createActivity(): void {
        throw new Error("Method not implemented.");
    }
}