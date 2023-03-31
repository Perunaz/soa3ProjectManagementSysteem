import { ItemState } from "../states/itemStates/itemState";
import { DoingItemState } from "../states/itemStates/doingItemState";
import { DoneItemState } from "../states/itemStates/doneItemState";
import { ReadyForTestingItemState } from "../states/itemStates/readyForTestingItemState";
import { TestingItemState } from "../states/itemStates/testingItemState";
import { TodoItemState } from "../states/itemStates/todoItemState";
import { TestedItemState } from "../states/itemStates/testedItemState";
import { Activity } from "./activity";
import { CompositeComponent } from "../itemThread/compositeComponent";
import { Visitor } from "../itemThread/visitor";
import { ProductOwner } from "../users/productOwner";
import { Developer } from "../users/developer";

export class Item extends CompositeComponent{
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
        super();
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

    public nextState(developers?: Developer[]): void {
        this._state.nextState(developers);
    }

    public testItem(isValidTest: boolean): void {
        this._state.testItem(isValidTest);
    }

    public changeDeveloper(developerId: number, productOwner: ProductOwner): void {
        this._state.changeDeveloper(developerId, productOwner);
    }

    public checkActivities(): boolean {
        if (this.activities.length > 0) {
            this.activities.forEach(activity => {
                if(!activity.getDone()) {
                    return false;
                }
            });
        }
        return true;
    }

    public getActivities(): Activity[] {
        return this.activities;
    }

    public createActivity(activity: Activity): void {
        this.activities.push(activity);
    }

    public finishActivity(activityId: number): void {
        let activityToFinish = this.activities.find(activity => activity.getActivityId() === activityId)
        activityToFinish?.markAsDone();
    }

    public deleteActivity(activityId: number): void {
        this.activities.slice(activityId, 1);
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitItem(this);
        super.acceptVisitor(visitor);
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

    public getDeveloperId(): number {
        return this.developerId;
    }

    public setDeveloperId(developerId: number) {
        this.developerId = developerId;
    }

    public getId(): number {
        return this.id;
    }
}
