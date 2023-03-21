import { ItemState } from "../states/itemStates/itemState";
import { DoingItemState } from "../states/itemStates/doingItemState";
import { DoneItemState } from "../states/itemStates/doneItemState";
import { ReadyForTestingItemState } from "../states/itemStates/readyForTestingItemState";
import { TestingItemState } from "../states/itemStates/testingItemState";
import { TodoItemState } from "../states/itemStates/todoItemState";

export class Item{
    private todoItemState: ItemState;
    private doingItemState: ItemState;
    private readyForTestingItemState: ItemState;
    private testingItemState: ItemState;
    private doneItemState: ItemState;
    
    private _state: ItemState;

    private id: number;
    private developerId: number;

    constructor(id: number, developerId: number) { 
        this.todoItemState = new TodoItemState(this);
        this.doingItemState = new DoingItemState(this);
        this.readyForTestingItemState = new ReadyForTestingItemState(this);
        this.testingItemState = new TestingItemState(this);
        this.doneItemState = new DoneItemState(this);

        this._state = this.todoItemState;

        this.id = id;
        this.developerId = developerId;
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
