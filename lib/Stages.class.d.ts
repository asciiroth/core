import { Stage } from './';
export declare class Stages {
    private _stages;
    constructor();
    addStage(name: string): void;
    removeStage(name: string): void;
    findStage(name: string): Stage;
    readonly stages: Stage[];
}
