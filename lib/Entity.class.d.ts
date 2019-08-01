export interface EntityOptions {
    id: string;
    referenceName: string;
    description: string;
    actions: string[];
}
export declare class Entity {
    id: string;
    referenceName: string;
    description: string;
    actions: string[];
    constructor(options: EntityOptions);
    setId(id: string): void;
    hasAction(action: string): boolean;
}
