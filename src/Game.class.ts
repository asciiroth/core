import {
	World,
	Player,
	Stage,
	Stages,
	Entity,
	Entities,
	Npc
} from './';
import { PlayerProperties } from './interfaces';

export class Game {
    private _stages: Stages = new Stages();
    private _stage: Stage;
    private _world: World;
    private _player: Player;
	private _entities: Entities;
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

    public setStage(stageName: string): void {
        const stage = this._stages.findStage(stageName);
        if (stage) {
            this._stage = stage;
            return;
        }

        throw new Error(`Cannot find stage ${stageName}`);
    }

    public get stages(): Stages {
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

	// todo adds new entity and new npc
}
