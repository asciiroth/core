export declare class Entity<T, U> {
    id: string;
    referenceName: string;
    description: string;
    actions: T[];
    constructor(options: U);
    setId(id: string): void;
    hasAction(action: T): boolean;
}
