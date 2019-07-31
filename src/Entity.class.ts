export class Entity<T, U> {
    public id: string;
    public referenceName: string;
    public description: string;
    public actions: T[];

    constructor(options: U) {
        Object.assign(this, options);
    }

    public setId(id: string) {
        this.id = id;
    }

    public hasAction(action: T): boolean {
        if (this.actions.includes(action)) {
            return true;
        }

        return false;
    }
}
