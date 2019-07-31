interface LocationProperties<T> {
    name: string;
    description: string;
    image: string;
    entities: T[];
}
export declare class Location<T> {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    entities: T[];
    constructor(options: LocationProperties<T>);
    addEntity(entity: any): void;
    removeEntity(entityId: string): void;
    findEntity(name: string): Partial<T>;
}
export {};
