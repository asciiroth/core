import { Entity, Npc } from './';
import { EntityProperties, NpcProperties } from './interfaces';
declare type UnionEntityNpc = Entity | Npc;
export declare class Entities {
    private _entities;
    addEntity(options: EntityProperties): UnionEntityNpc;
    addNpc(options: NpcProperties): UnionEntityNpc;
    removeEntity(name: string): void;
    findEntity(name: string): Entity;
    readonly entities: Entity[];
}
export {};
