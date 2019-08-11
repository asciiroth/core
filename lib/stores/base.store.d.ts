interface IItem {
    id?: string;
    name: string;
}
export declare class BaseStore<T extends IItem> {
    private _items;
    private _activeItem;
    constructor(items?: T | T[]);
    readonly items: T[];
    readonly active: T;
    find(item: T | string): T;
    findIndex(item: T): number;
    add(items: T | T[]): T | T[];
    addSingleItem(item: T): T;
    delete(item: T): void;
    update(item: T): void;
    setActive(item: T | string): void;
    private generateId;
}
export {};
