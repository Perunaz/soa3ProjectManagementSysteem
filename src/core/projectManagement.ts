import { Pipeline } from "../pipeline/pipeline";
import { ReportExportStrategy } from "../reportExportStrategy/reportExportStrategy";
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

    constructor(productOwner: ProductOwner, developers: Developer[], codeArchive: CodeArchive) {
        this.productOwner = productOwner;
        this.developers = developers
        this.codeArchives = [codeArchive];
    }

    public addSprint(name: string,
        startDate: Date,
        endDate: Date,
        sprintBacklog: Backlog,
        productBacklog: Backlog,
        pipeline: Pipeline): void {

        let sprint = new Sprint(name, startDate, endDate, sprintBacklog, productBacklog, pipeline);
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

    getCodeArchive(): CodeArchive[] {
        return this.codeArchives;
    }
}