import { Npc, Entity } from './';
declare type EntityUnionType = Npc | Entity;
interface LocationProperties {
    name: string;
    description?: string;
    image?: string;
    entities?: EntityUnionType[];
}
export declare class Location {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    entities: EntityUnionType[];
    constructor(options: LocationProperties);
    addEntity(entity: any): void;
    removeEntity(entityId: string): void;
    findEntity(name: string): Partial<EntityUnionType>;
    private generateId;
}
export {};
