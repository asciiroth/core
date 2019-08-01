import { Npc, Entity } from './';

type EntityUnionType = Npc | Entity;

interface LocationProperties {
    name: string;
    description?: string;
    image?: string;
    entities?: EntityUnionType[];
}

export class Location {
    public readonly name: string;
    public readonly description: string;
    public readonly image: string;
    public entities: EntityUnionType[] = [];

    constructor(
        options: LocationProperties
    ) {
		this.name = options.name || '';
		this.description = options.description || '';
		this.image = options.description || '';
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
        return this.entities.find(entity => entity.referenceName.toLowerCase() === name.toLowerCase());
    }

	private generateId(): string {
	    return `e_${performance.now()}`;
	}
}
