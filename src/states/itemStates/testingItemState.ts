import { Item } from "../../core/item";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { ItemState } from "./itemState";

export class TestingItemState implements ItemState {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    nextState(): void {
        console.log("Item still needs to be tested");
    }
    
    testItem(isValidTest: boolean, scrumMaster: Developer): void {
        if(isValidTest) {
            this.item.setState(this.item.getTestedItemState());
        } else {
            scrumMaster.getMessageService().sendEmailMessage(scrumMaster.getName(), "Item back to ToDo state!")
            this.item.setState(this.item.getToDoItemState());
        }
    }
    
    changeDeveloper(developerId: number, productOwner: ProductOwner): void {
        throw new Error("Method not implemented.");
    }
}