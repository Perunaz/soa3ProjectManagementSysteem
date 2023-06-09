import { Item } from "../../core/item";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { ItemState } from "./itemState";

export class TodoItemState implements ItemState {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    nextState(): void {
        this.item.setState(this.item.getDoingItemState());
    }
    
    testItem(isValidTest: boolean, scrumMaster: Developer): void {
        console.log("can't test right now");
    }

    changeDeveloper(developerId: number, productOwner: ProductOwner): void {
        this.item.setDeveloperId(developerId);

        if(productOwner !== undefined) {
            productOwner.getMessageService().sendEmailMessage(productOwner.getName(), "Pipeline failed to release")
        }
    }
}