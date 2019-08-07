import { Entity, Npc } from './';
import { EntityProperties, NpcProperties } from './interfaces';

type UnionEntityNpc = Entity | Npc;

interface EntitiesInterface {
    [id: string]: UnionEntityNpc
}

export class Entities {
    private _entities: EntitiesInterface = {};

    public addEntity(options: EntityProperties): UnionEntityNpc {
        const entity = new Entity(options);
        this._entities[entity.id] = entity;
        return this._entities[entity.id];
    }

    public addNpc(options: NpcProperties): UnionEntityNpc {
        console.log(options);
        const npc = new Npc(options);
        this._entities[npc.id] = npc;
        return this._entities[npc.id];
    }

    public removeEntity(name: string): void {
        delete this._entities[name];
    }

    public findEntity(name: string): Entity {
        return this._entities[name];
    }

    public get entities(): Entity[] {
        return Object.values(this._entities);
    }
}
