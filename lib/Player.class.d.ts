import { Inventory, Npc, World, Race, Class, Zone, Game, Pet } from './';
interface PlayerProperties {
    xp?: number;
    name: string;
    race?: Race;
    class?: Class;
    coords: [number, number];
    zone: Zone;
    world: World;
    game: Game;
    onDeath: Function;
}
interface PlayerActionPayload {
    direction?: string;
    args?: string[];
    hp?: number;
}
export declare class Player {
    inventory: Inventory;
    xp: number;
    name: string;
    race: Race;
    class: Class;
    pet: Pet;
    _spells: number[];
    private quests;
    coords: [number, number];
    zone: Zone;
    maxHp: number;
    hp: number;
    strength: number;
    defence: number;
    combatSelectedEnemy: Partial<Npc>;
    completedIntroduction: boolean;
    private _game;
    onDeath: Function;
    actions: {
        [name: string]: Function;
    };
    constructor(options: PlayerProperties);
    readonly spells: number[];
    hasCompleted(...questIds: number[]): boolean;
    addAction(name: string, action: Function): void;
    action(action: string, payload: PlayerActionPayload): void;
    setName(name: string): void;
    setRace(race: Race): void;
    setZone(zone: Zone): void;
    setClass(playerClass: Class): void;
    removeHp(amount: number): number;
    addHp(amount?: number): number;
}
export {};
