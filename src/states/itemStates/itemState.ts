import { Item } from "../../core/item";
import { Developer } from "../../users/developer";
import { ProductOwner } from "../../users/productOwner";

export interface ItemState {
    item: Item;

    nextState(developers?: Developer[], scrumMaster?: Developer): void;
    testItem(isValidTest: boolean, scrumMaster?: Developer): void;
    changeDeveloper(developerId: number, productOwner: ProductOwner): void;
}