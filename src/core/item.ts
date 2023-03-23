import { ItemState } from "../states/itemStates/itemState";
import { DoingItemState } from "../states/itemStates/doingItemState";
import { DoneItemState } from "../states/itemStates/doneItemState";
import { ReadyForTestingItemState } from "../states/itemStates/readyForTestingItemState";
import { TestingItemState } from "../states/itemStates/testingItemState";
import { TodoItemState } from "../states/itemStates/todoItemState";
import { TestedItemState } from "../states/itemStates/testedItemState";
import { Activity } from "./activity";

export class Item{
    private todoItemState: ItemState;
    private doingItemState: ItemState;
    private readyForTestingItemState: ItemState;
    private testingItemState: ItemState;
    private testedItemState: ItemState;
    private doneItemState: ItemState;
    
    private _state: ItemState;

    private id: number;
    private developerId: number;
    private activities: Activity[] = [];

    constructor(id: number, developerId: number) { 
        this.todoItemState = new TodoItemState(this);
        this.doingItemState = new DoingItemState(this);
        this.readyForTestingItemState = new ReadyForTestingItemState(this);
        this.testingItemState = new TestingItemState(this);
        this.testedItemState = new TestedItemState(this);
        this.doneItemState = new DoneItemState(this);

        this._state = this.todoItemState;

        this.id = id;
        this.developerId = developerId;
    }

    public createActivity(activity: Activity): void {
        this.activities.push(activity);
    }

    public finishActivity(activityId: number): void {
        let activityToFinish = this.activities.find(activity => activity.activityId === activityId)
        activityToFinish?.markAsDone();
    }

    public deleteActivity(): void {
        throw new Error("Method not implemented.");
    }

    public isDone(): boolean {
        throw new Error("Method not implemented.");
    }

    public setState(state: ItemState): void {
		this._state = state;
	}

    public getState(): ItemState { 
        return this._state;
    }

    public getToDoItemState(): TodoItemState { 
        return this.todoItemState;
    }

    public getDoingItemState(): DoingItemState { 
        return this.doingItemState;
    }

    public getReadyForTestingItemState(): ReadyForTestingItemState { 
        return this.readyForTestingItemState;
    }

    public getTestingItemState(): TestingItemState { 
        return this.testingItemState;
    }

    public getTestedItemState(): TestedItemState { 
        return this.testedItemState;
    }

    public getDoneItemState(): DoneItemState { 
        return this.doneItemState;
    }
}
