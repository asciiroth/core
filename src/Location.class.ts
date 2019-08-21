import {
    Npc,
    Entity,
} from './';
import { LocationProperties } from './interfaces';

import { BaseStore } from './stores/Base.store';

type EntityUnionType = Npc | Entity;


export class Location {
    public readonly name: string;
    public readonly id: string;
    public readonly description: string;
    public readonly image: string;
    private _entities: BaseStore<Npc | Entity> = new BaseStore<Npc | Entity>();
    private _coords: [number, number];
    private _custom: {
        [id: string]: any;
    } = {};

    constructor(
        options: LocationProperties
    ) {
        this.name = options.name || '';
        this.description = options.description || '';
        this.image = options.description || '';
        this._coords = options.coords || null;
        if (options.entities) {
            this._entities.add(options.entities);
        }

        this._custom = {
            ...this._custom,
            ...options.custom,
        }

        delete options.custom;
    }

    public get coords(): [number, number] {
        return this._coords;
    }

    public setCoords(x: number, y: number): void {
        this._coords = [x, y];
    }

    public find(name: string): Npc | Entity {
        return this._entities.find(name);
    }

    public get entities(): (Npc | Entity)[] {
        return this._entities.items;
    }

    public get custom(): {
        [id: string]: any,
    } {
        return this._custom;
    }

    public addCustom(customProperties: {
        [id: string]: any,
    }): void {
        this._custom = {
            ...this._custom,
            ...customProperties,
        }
    }

    // public addEntity(entity: EntityUnionType) {
    //     this.entities.push(entity);
    // }
    //
    // public removeEntity(entityId: string) {
    //     this.entities = this.entities.filter(entity => entity.id !== entityId);
    // }
    //
    // public findEntity(name: string): Partial<EntityUnionType> {
    //     if (!name) {
    //         return null;
    //     }
    //     return this.entities.find(entity => entity.referenceNames.filter(name => name.toLowerCase()).includes(name.toLowerCase()));
    // }
}
