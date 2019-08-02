import { Entity, Npc } from './';
import { EntityProperties, NpcProperties } from './interfaces';

type UnionEntityNpc = Entity | Npc;

interface EntitiesInterface {
	[id: string]: UnionEntityNpc
}

export class Entities {
    private _entities: EntitiesInterface = {};

    public addEntity(options: EntityProperties): void {
        const entity = new Entity(name);
        this._entities[entity.id] = entity;
    }

	public addNpc(options: NpcProperties): void {
        const npc = new Npc(name);
        this._entities[npc.id] = npc;
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
