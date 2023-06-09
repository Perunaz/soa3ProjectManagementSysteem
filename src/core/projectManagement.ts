import { Pipeline } from "../pipeline/pipeline";
import { Developer } from "../users/developer";
import { ProductOwner } from "../users/productOwner";
import { Backlog } from "./backlog";
import { CodeArchive } from "./codeArchive";
import { Sprint } from "./sprint";

export class ProjectManagement {
    private sprints: Sprint[] = [];
    private productOwner: ProductOwner;
    private developers: Developer[];
    private codeArchives: CodeArchive[];
    private productBacklog: Backlog;

    constructor(productOwner: ProductOwner, developers: Developer[], codeArchive: CodeArchive, productBacklog: Backlog) {
        this.productOwner = productOwner;
        this.developers = developers
        this.codeArchives = [codeArchive];
        this.productBacklog = productBacklog;
    }

    public addSprint(name: string,
        startDate: Date,
        endDate: Date,
        pipeline: Pipeline,
        scrumMaster: Developer): void {

        let sprint = new Sprint(name, startDate, endDate, this.productBacklog, pipeline, this.productOwner, scrumMaster);
        this.sprints.push(sprint);
    }

    public getSprints(): Sprint[] {
        return this.sprints
    }

    public getProductOwner(): ProductOwner {
        return this.productOwner;
    }

    public getDevelopers(): Developer[] {
        return this.developers;
    }

    public getBacklog(): Backlog {
        return this.productBacklog;
    }

    getCodeArchives(): CodeArchive[] {
        return this.codeArchives;
    }
}