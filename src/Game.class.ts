import {
    World,
    Player,
    Stage,
    Stages,
    Entity,
    Entities,
    Npc
} from './';
import {
    PlayerProperties,
    EntityProperties,
    NpcProperties,
} from './interfaces';
import { BaseStore } from './stores/Base.store';

export class Game {
    private _stages: BaseStore<Stage> = new BaseStore<Stage>();
    private _stage: Stage;
    private _world: World;
    private _player: Player;
    private _entities: Entities = new Entities();
    private _output: string[] = [];

    constructor(
        private _name: string
    ) { }

    public get name(): string {
        return this._name;
    }

    public newWorld(name: string) {
        this._world = new World(name);
        return this._world;
    }

    public setWorld(world: World): void {
        this._world = world;
    }

    public get world(): World {
        return this._world;
    }

    public newPlayer(options: PlayerProperties) {
        if (!this.world) {
            throw new Error('Game must have a world before you can add a new player.');
        }
        options.world = this._world;
        options.game = this;
        this._player = new Player(options);
        return this._player;
    }

    public setPlayer(player: Player): void {
        this._player = player;
    }

    public get player(): Player {
        return this._player;
    }

    public get stage(): string {
        return this._stage.name;
    }

    public addStage(name: string): void {
        const stage = new Stage(name);
        this._stages.add(stage);
    }

    public setStage(stage: Stage): void {
        if (stage) {
            this._stage = stage;
            return;
        }
    }

    public get stages(): BaseStore<Stage> {
        return this._stages;
    }

    public get entities(): Entities {
        return this._entities;
    }

    public get output(): string[] {
        return this._output;
    }

    public addOutput(output: string): void {
        this._output.push(output);
    }

    public newEntity(options: EntityProperties) {
        return this._entities.addEntity({
            ...options,
            _game: this,
        });
    }

    public newNpc(options: NpcProperties) {
        return this._entities.addNpc({
            ...options,
            _game: this,
        });
    }
}
