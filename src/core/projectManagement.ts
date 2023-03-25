import { Pipeline } from "../pipeline/pipeline";
import { ReportExportStrategy } from "../reportExportStrategy/reportExportStrategy";
import { ProductOwner } from "../users/productOwner";
import { Backlog } from "./backlog";
import { Sprint } from "./sprint";

export class ProjectManagement {
    private sprints: Sprint[] = [];
    private productOwner: ProductOwner;

    constructor(productOwner: ProductOwner) {
        this.productOwner = productOwner;
    }

    addSprint(name: string,
        startDate: Date,
        endDate: Date,
        reportExportStrategy: ReportExportStrategy,
        sprintBacklog: Backlog,
        productBacklog: Backlog,
        pipeline: Pipeline) {

        let sprint = new Sprint(name, startDate, endDate, sprintBacklog, productBacklog, pipeline, this.productOwner);
        this.sprints.push(sprint);
    }

    getSprints(): Sprint[] {
        return this.sprints
    }

    getProductOwner(): ProductOwner {
        return this.productOwner;
    }
}