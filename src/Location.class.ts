import { Npc, Entity } from './';

type EntityUnionType = Npc | Entity;

interface LocationProperties {
    name: string;
    id?: number;
    description?: string;
    image?: string;
    entities?: EntityUnionType[];
    coords?: number[];
}

export class Location {
    public readonly name: string;
    public readonly id: string;
    public readonly description: string;
    public readonly image: string;
    public entities: EntityUnionType[] = [];
    public readonly coords: number[];

    constructor(
        options: LocationProperties
    ) {
        this.name = options.name || '';
        this.description = options.description || '';
        this.image = options.description || '';
        this.coords = options.coords || null;
        if (options.entities) {
            options.entities.forEach(entity => this.addEntity(entity));
        }
    }

    public addEntity(entity: any) {
        entity.setId(this.generateId());
        this.entities.push(entity);
    }

    public removeEntity(entityId: string) {
        this.entities = this.entities.filter(entity => entity.id !== entityId);
    }

    public findEntity(name: string): Partial<EntityUnionType> {
        if (!name) {
            return null;
        }
        return this.entities.find(entity => entity.referenceNames.filter(name => name.toLowerCase()).includes(name.toLowerCase()));
    }

    private generateId(): string {
        return `e_${performance.now()}`;
    }
}
