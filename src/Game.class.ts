import {
    Ability,
    World,
    Player,
    Stage,
    Entity,
    Location,
    Quest,
    Npc,
    Zone,
} from './';
import {
    PlayerProperties,
    EntityProperties,
    NpcProperties,
    LocationProperties,
    ZoneProperties,
} from './interfaces';
import { Utils } from './utils/Utils.class';
import { BaseStore } from './stores/Base.store';

export class Game {
    private _stages: BaseStore<Stage> = new BaseStore<Stage>();
    private _zones: BaseStore<Zone> = new BaseStore<Zone>();
    private _worlds: BaseStore<World> = new BaseStore<World>();
    private _locations: BaseStore<Location> = new BaseStore<Location>();
    private _npcs: BaseStore<Npc> = new BaseStore<Npc>();
    private _entities: BaseStore<Entity> = new BaseStore<Entity>();
    private _quests: BaseStore<Quest> = new BaseStore<Quest>();
    private _abilities: BaseStore<Ability> = new BaseStore<Ability>();
    private _player: Player;
    private _output: string[] = [];
    private _actions = {
        talk: (game: Game, args: string[]): void => {
            // args will be something like ['abby']
            const [name, subject] = args.map(item => item.toLowerCase());

            if (!name) {
                return game.addOutput('Who would you like to talk to?');
            }

            const target: Npc = <Npc>game.player.location.find(name);

            if (!target) {
                return game.addOutput(`Cannot find ${name}`);
            }

            if (target.speech[subject]) {
                return game.addOutput(<string>target.speech[subject]);
            }

            game.addOutput(<string>target.speech.default);
        },
        walk: (game: Game, args: string[]) => {
            const [direction] = args.map(item => item.toLowerCase());
            if (!direction) {
                return this.addOutput('Which direction would you like to walk?');
            }

            const availableDirections: any = this._player.zone.getAvailableDirections(...game._player.coords);

            if (availableDirections[direction]) {
                game._player.setZone(availableDirections[direction].zone || game.player.zone);
                game._player.setLocation(availableDirections[direction].location);
                return;
            }

            return game.addOutput('Cannot move in that direction');
        },
        attack: (game: Game, args: string[]) => {
            const [name] = args.map(item => item.toLowerCase());

            const target: Npc = <Npc>game.player.location.find(name);

            if (!target) {
                return game.addOutput(`Cannot find ${name}`);
            }

            const damage = Utils.calculateBaseDamage(this.player.strength, target.defence);

            target.removeHp(damage);
        },
        go: (game: Game, args: string[]) => {
            this._actions.walk(game, args);
        },
    }

    constructor(
        private _name: string
    ) { }

    public get name(): string {
        return this._name;
    }

    // Actions

    public action(command: string, args: string[]): void {
        if (this._actions[command]) {
            return this._actions[command](this, args);
        }

        this.addOutput(`Command "${command}" does not exist`);
    }

    public addAction(command: string, action: Function): void {
        this._actions[command] = action;
    }

    // Stages

    public get stage(): string {
        return this._stages.active.name;
    }

    public get stages(): BaseStore<Stage> {
        return this._stages;
    }

    public addStage(name: string): Stage {
        const stage = new Stage(name);
        this._stages.add(stage);
        return stage;
    }

    public setStage(stage: Stage | string): void {
        this._stages.setActive(stage);
    }

    // Worlds

    public newWorld(name: string) {
        const world = new World(name);
        this._worlds.add(world);
        return world;
    }

    public setWorld(world: World | string): void {
        this._worlds.setActive(world);
    }

    public get world(): World {
        return this._worlds.active;
    }

    public get worlds() {
        return this._worlds;
    }

    // Zones

    public newZone(options: ZoneProperties) {
        const zone = new Zone(options);
        this._zones.add(zone);
        return zone;
    }

    public setZone(zone: Zone | string): void {
        this._zones.setActive(zone);
    }

    public get zones() {
        return this._zones;
    }

    // Locations

    public newLocation(options: LocationProperties): Location {
        const location = new Location(options);
        this._locations.add(location);
        return location;
    }

    public get locations() {
        return this._locations;
    }

    // Player

    public newPlayer(options: PlayerProperties) {
        if (!options.world) {
            throw new Error('Game must have a world before you can add a new player.');
        }
        this._player = new Player(options);
        return this._player;
    }

    public setPlayer(player: Player): void {
        this._player = player;
    }

    public get player(): Player {
        return this._player;
    }

    // Entities

    public get entities(): Entity[] {
        return this._entities.items;
    }

    public newEntity(options: EntityProperties) {
        return this._entities.add(new Entity({
            ...options,
        }));
    }

    public newNpc(options: NpcProperties) {
        return this._entities.add(new Npc({
            ...options,
        }));
    }

    // Output

    public get output(): string[] {
        return this._output;
    }


    public addOutput(output: string): void {
        this._output.push(output);
    }

}
