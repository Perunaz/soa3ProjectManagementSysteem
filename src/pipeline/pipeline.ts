export abstract class Pipeline {
    private released: boolean = false;

    constructor() {
    }

    abstract build(): void;
  
    abstract releaseSprint(): void;

    abstract cancelRelease(): void;

    abstract installPackages(): void;

    abstract buildCode(): void;

    abstract runTests(): void;

    abstract deploy(): void;
    
    isReleased(): boolean {
        return this.released;
    }

    setReleased(value: boolean): void {
        this.released = value;
      }
  }