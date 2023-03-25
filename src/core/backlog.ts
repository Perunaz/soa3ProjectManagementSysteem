import { DoneItemState } from "../states/itemStates/doneItemState";
import { Item } from "./item";

export class Backlog{

    private item: Item[];

    constructor() {
        this.item = [];
    }

    public addItem(item: Item): void {
        this.item.push(item)
    }

    public getItem(index: number): Item { 
        return this.item[index];
    }

    public isFinished(): boolean { 
        this.item.forEach(item => {
            if(item.getState() !== item.getDoneItemState()) {
                return false;
            }
        })
        return true;
    }
}