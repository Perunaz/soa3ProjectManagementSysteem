import { Item } from "../../core/item";
import { ItemState } from "./itemState";

export class TestingItemState implements ItemState {
    isReviewable: boolean;
    item: Item;

    constructor(item: Item) {  
        this.item = item;
        this.isReviewable = false
    }

    addItem(): void {
        throw new Error("Method not implemented.");
    }

    removeItem(): void {
        throw new Error("Method not implemented.");
    }

    editItem(): void {
        throw new Error("Method not implemented.");
    }

    deleteItem(): void {
        throw new Error("Method not implemented.");
    }
}