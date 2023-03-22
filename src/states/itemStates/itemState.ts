import { Item } from "../../core/item";

export interface ItemState {
    isReviewable: boolean;
    item: Item;

    addItem(): void;
    removeItem(): void;
    editItem(): void;
    deleteItem(): void;
}