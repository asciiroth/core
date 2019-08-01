import { Inventory, Npc, World, Race, Class, Zone, Game } from './';
interface PlayerProperties {
    xp?: number;
    name: string;
    race?: Race;
    class?: Class;
    coords: [number, number];
    zone: Zone;
    world: World;
    game: Game;
}
export declare class Player {
    inventory: Inventory;
    xp: number;
    name: string;
    race: Race;
    class: Class;
    petName?: string;
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
    actions: {
        [name: string]: Function;
    };
    constructor(options: PlayerProperties);
    readonly spells: number[];
    hasCompleted(...questIds: number[]): boolean;
    addAction(actionSkeleton: {
        name: string;
        action: Function;
    }): void;
    action(action: {
        name: string;
        payload: object;
    }): void;
    setName(name: string): void;
    setRace(race: Race): void;
    setClass(playerClass: Class): void;
    removeHp(amount: number): number;
    addHp(amount?: number): number;
}
export {};
