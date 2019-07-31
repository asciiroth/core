import { Inventory, Npc, World } from './';
import { EntityDirections, EntityActions, Races, Classes } from '../enums';
export interface SpeechTree {
    [entityId: string]: string;
}
export interface SpeechBranch {
}
interface PlayerProperties {
    xp?: number;
    name: string;
    race: Races;
    class: Classes;
    coords: [number, number];
    world: World;
    speechCache?: SpeechTree;
}
interface PlayerAction {
    action: EntityActions;
    data: PlayerActionPayload;
}
interface PlayerActionPayload {
    direction?: EntityDirections;
    args?: string[];
    hp?: number;
}
export declare class Player {
    inventory: Inventory;
    xp: number;
    name: string;
    race: Races;
    class: Classes;
    petName?: string;
    _spells: number[];
    private quests;
    coords: [number, number];
    world: World;
    maxHp: number;
    hp: number;
    strength: number;
    defence: number;
    combatSelectedEnemy: Partial<Npc>;
    completedIntroduction: boolean;
    constructor(options: PlayerProperties);
    readonly spells: number[];
    hasCompleted(...questIds: number[]): boolean;
    action(payload: PlayerAction): boolean;
    setName(name: string): void;
    setRace(race: Races): void;
    setClass(playerClass: Classes): void;
    removeHp(amount: number): number;
    addHp(amount?: number): number;
}
export {};
