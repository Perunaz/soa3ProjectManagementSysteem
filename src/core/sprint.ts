import { sprintState } from "../../sprintState/sprintState";

export class Sprint {
    private name: string;
    sprintState: sprintState;

    constructor(name: string) { 
        this.name = name;
        this.sprintState = new sprintState(true);
    }
}