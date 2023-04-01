import { Item } from "../../core/item";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";
import { ItemState } from "./itemState";

export class DoingItemState implements ItemState {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    nextState(developers: Developer[]): void {
        if(this.item.checkActivities()) {
            this.item.setState(this.item.getReadyForTestingItemState());
            developers.forEach(developer => {
                if(developer.getIsTester()) {
                    developer.getMessageService().sendEmailMessage(developer.getName(), `Pls test item: ${this.item.getId()}`)
                }
            })
        } else {
            this.item.setState(this.item.getToDoItemState());
        }
    }
    
    testItem(isValidTest: boolean): void {
        console.log("can't test right now");
    }
    
    changeDeveloper(developerId: number, productOwner: ProductOwner): void {
        this.item.setDeveloperId(developerId);

        if(productOwner !== undefined) {
            productOwner.getMessageService().sendEmailMessage(productOwner.getName(), "Pipeline failed to release")
        }
    }
}