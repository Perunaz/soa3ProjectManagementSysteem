export class CodeArchive {
    private branchName: string;
    private code: string[]

    constructor(branchName: string) { 
        this.branchName = branchName;
        this.code = [];
    }

    getBranchName() { 
        return this.branchName;
    }

    push(code: string[]) {
        code.forEach(code => this.code.push(code));
    }

    pull() {
        return this.code;
    }
}