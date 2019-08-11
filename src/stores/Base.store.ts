interface IItem {
    id?: string;
	name: string;
}

export class BaseStore<T extends IItem> {
    private _items: T[] = [];
    private _activeItem: T;

    constructor(items?: T | T[]) {
        if (items) {
            this.add(items);
        }
    }

    public get items() {
        return this._items;
    }

    public get active(): T {
        return this._activeItem;
    }

    public find(item: T | string) {
		if (typeof item === 'string') {
			return this._items.find(({ name }) => name === item);
		}

        return this._items.find(({ id }) => id === item.id);
    }

    public findIndex(item: T): number {
		if (typeof item === 'string' || typeof item === 'number') {
			return this._items.findIndex(({ name }) => name === item);
		}

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
        if (!item.id) {
            item.id = this.generateId();
        }

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

    public setActive(item: T | string): void {
        this._activeItem = this.find(item);
    }

    private generateId(): string {
        return `asciiroth_${performance.now()}`;
    }
}
