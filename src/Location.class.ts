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
    public entities: BaseStore<Npc | Entity> = new BaseStore<Npc | Entity>();
    public readonly coords: number[];

    constructor(
        options: LocationProperties
    ) {
        this.name = options.name || '';
        this.description = options.description || '';
        this.image = options.description || '';
        this.coords = options.coords || null;
        if (options.entities) {
            this.entities.add(options.entities);
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
