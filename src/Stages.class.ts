import { Stage } from './';

export class Stages {
    private _stages: Stage[] = [];

    public constructor() {

    }

    public addStage(name: string): void {
        const stage = new Stage(name);
        this._stages[stage.name] = stage;
    }

    public removeStage(name: string): void {
        delete this._stages[name];
    }

    public get stages(): Stage[] {
        return Object.values(this._stages);
    }
}
