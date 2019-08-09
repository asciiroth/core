interface IItem {
    id?: string;
}

export class BaseStore<T extends IItem> {
    private _items: T[] = [];

    constructor(items?: T[]) {
        if (items) {
            this._items = [
                ...items,
            ];
        }
    }

    public get items() {
        return this._items;
    }

    public find(item: T) {
        return this._items.find(({ id }) => id === item.id);
    }

    public findIndex(item: T): number {
        return this._items.findIndex(({ id }) => id === item.id);
    }

    public add(items: T | T[]) {
        if (Array.isArray(items)) {
            for (const item of items) {
                this.addSingleItem(item);
            }
            return items;
        }

        return this.addSingleItem(items);
    }

    public addSingleItem(item: T) {
        item.id = this.generateId();
        this._items.push(item);
        return item;
    }

    public delete(item: T) {
        this._items = this._items.filter(_item => _item.id !== item.id);
    }

    public update(item: T) {
        this._items = this._items.map(_item => {
            if (_item.id === item.id) {
                _item = item;
            }

            return item;
        })
    }

    private generateId(): string {
        return `asciiroth_${performance.now()}`;
    }
}
