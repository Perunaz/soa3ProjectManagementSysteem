import { Item } from "../../core/item";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { ItemState } from "./itemState";

export class TestedItemState implements ItemState {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    nextState(): void {
        console.log("Item still needs to be tested for a second time");
    }
    
    testItem(isValidTest: boolean, scrumMaster: Developer): void {
        if(isValidTest) {
            this.item.setState(this.item.getDoneItemState());
        } else {
            scrumMaster.getMessageService().sendEmailMessage(scrumMaster.getName(), "Item back to ToDo state!")
            this.item.setState(this.item.getToDoItemState());
        }
    }
    
    changeDeveloper(developerId: number, productOwner: ProductOwner): void {
        console.log("can't change after finishing item");
    }
}