import { Pipeline } from "../pipeline/pipeline";
import { ReportExportStrategy } from "../reportExportStrategy/reportExportStrategy";
import { Developer } from "../users/developer";
import { ProductOwner } from "../users/productOwner";
import { Backlog } from "./backlog";
import { Sprint } from "./sprint";

export class ProjectManagement {
    private sprints: Sprint[] = [];
    private productOwner: ProductOwner;
    private developers: Developer[];

    constructor(productOwner: ProductOwner, developers: Developer[]) {
        this.productOwner = productOwner;
        this.developers = developers
    }

    addSprint(name: string,
        startDate: Date,
        endDate: Date,
        sprintBacklog: Backlog,
        productBacklog: Backlog,
        pipeline: Pipeline) {

        let sprint = new Sprint(name, startDate, endDate, sprintBacklog, productBacklog, pipeline, this.productOwner, this.developers);
        this.sprints.push(sprint);
    }

    getSprints(): Sprint[] {
        return this.sprints
    }

    getProductOwner(): ProductOwner {
        return this.productOwner;
    }

    getDevelopers(): Developer[] {
        return this.developers;
    }
}