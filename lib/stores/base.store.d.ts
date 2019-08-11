interface IItem {
    id?: string;
    name: string;
}
export declare class BaseStore<T extends IItem> {
    private _items;
    constructor(items?: T[]);
    readonly items: T[];
    find(item: T | string): T;
    findIndex(item: T): number;
    add(items: T | T[]): T | T[];
    addSingleItem(item: T): T;
    delete(item: T): void;
    update(item: T): void;
    private generateId;
}
export {};
