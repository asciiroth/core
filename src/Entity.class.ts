export interface EntityOptions {
	id: string;
    referenceName: string;
    description: string;
    actions: string[];
}

export class Entity {
    public id: string;
    public referenceName: string;
    public description: string;
    public actions: string[];

    constructor(options: EntityOptions) {
        Object.assign(this, options);
    }

    public setId(id: string) {
        this.id = id;
    }

    public hasAction(action: string): boolean {
        if (this.actions.includes(action)) {
            return true;
        }

        return false;
    }
}
