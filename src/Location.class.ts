const generateId = (): string => {
    return `e_${performance.now()}`;
}

interface LocationProperties<T> {
    name: string;
    description: string;
    image: string;
    entities: T[];
}

export class Location<T> {
    public readonly name: string;
    public readonly description: string;
    public readonly image: string;
    public entities: T[] = [];

    constructor(
        options: LocationProperties<T>
    ) {
        options.entities.forEach(entity => this.addEntity(entity));
    }

    public addEntity(entity: any) {
        entity.setId(generateId());
        this.entities.push(entity);
    }

    public removeEntity(entityId: string) {
        this.entities = this.entities.filter(({ id }) => id !== entityId);
    }

    public findEntity(name: string): Partial<T> {
        if (!name) {
            return null;
        }
        return this.entities.find(({ referenceName }) => referenceName.toLowerCase() === name.toLowerCase());
    }
}
