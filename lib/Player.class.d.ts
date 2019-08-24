import { Inventory, Npc, World, Location, Race, Class, Zone, Pet } from './';
import { PlayerProperties } from './interfaces';
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
    world: World;
    location: Location;
    maxHp: number;
    hp: number;
    strength: number;
    defence: number;
    combatSelectedEnemy: Partial<Npc>;
    completedIntroduction: boolean;
    private _game;
    onDeath: Function;
    constructor(options: PlayerProperties);
    readonly spells: number[];
    hasCompleted(...questIds: number[]): boolean;
    setName(name: string): void;
    setRace(race: Race): void;
    setZone(zone: Zone): void;
    setLocation(location: Location): void;
    setClass(playerClass: Class): void;
    removeHp(amount: number): number;
    addHp(amount?: number): number;
    readonly currentDirections: {
        north?: {
            zone?: Zone;
            location: Location;
        };
        east?: {
            zone?: Zone;
            location: Location;
        };
        south?: {
            zone?: Zone;
            location: Location;
        };
        west?: {
            zone?: Zone;
            location: Location;
        };
        [key: string]: {
            zone?: Zone;
            location: Location;
        };
    };
}
