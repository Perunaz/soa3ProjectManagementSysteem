import { Item } from "../../core/item";
import { ProductOwner } from "../../users/productOwner";
import { ItemState } from "./itemState";

export class DoneItemState implements ItemState {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    nextState(): void {
        console.log("Item is already done!");
    }

    testItem(isValidTest: boolean): void {
        console.log("Item is already tested");
    }
    
    changeDeveloper(developerId: number, productOwner: ProductOwner): void {
        console.log("Item is already done!");
    }
}