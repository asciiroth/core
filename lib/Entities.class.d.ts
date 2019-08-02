import { Entity } from './';
import { EntityProperties, NpcProperties } from './interfaces';
export declare class Entities {
    private _entities;
    addEntity(options: EntityProperties): void;
    addNpc(options: NpcProperties): void;
    removeEntity(name: string): void;
    findEntity(name: string): Entity;
    readonly entities: Entity[];
}
