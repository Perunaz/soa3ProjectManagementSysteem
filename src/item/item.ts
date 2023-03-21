import { ItemState } from "./itemState";
import { DoingItemState } from "./states/doingItemState";
import { DoneItemState } from "./states/doneItemState";
import { ReadyForTestingItemState } from "./states/readyForTestingItemState";
import { TestingItemState } from "./states/testingItemState";
import { TodoItemState } from "./states/todoItemState";

export class Item{
    private todoItemState: ItemState;
    private doingItemState: ItemState;
    private readyForTestingItemState: ItemState;
    private testingItemState: ItemState;
    private doneItemState: ItemState;
    
    private _state: ItemState;

    private id: number;
    private developerId: number;

    constructor() { 
        this.todoItemState = new TodoItemState(this);
        this.doingItemState = new DoingItemState(this);
        this.readyForTestingItemState = new ReadyForTestingItemState(this);
        this.testingItemState = new TestingItemState(this);
        this.doneItemState = new DoneItemState(this);

        this._state = this.todoItemState;

    }

    public createActivity(): void {
        throw new Error("Method not implemented.");
    }

    public updateActivity(): void {
        throw new Error("Method not implemented.");
    }

    public deleteActivity(): void {
        throw new Error("Method not implemented.");
    }

    public isDone(): boolean {
        throw new Error("Method not implemented.");
    }
}
