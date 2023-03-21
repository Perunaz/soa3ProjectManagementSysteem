import { Item } from "../item";
import { ItemState } from "../itemState";

export class DoneItemState implements ItemState {
    isReviewable: boolean;
    private state: Item;

    constructor(_state: Item) {  
        this.state = _state;

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