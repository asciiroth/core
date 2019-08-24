import { Npc, Entity, Zone, Location } from '../';

export interface LocationProperties {
    name: string;
    id?: number;
    description?: string;
    image?: string;
    entities?: (Npc | Entity)[];
    coords?: [number, number];
    custom: {
        [id: string]: any;
    },
    customDirections: {
        [key: string]: {
            zone?: Zone,
            location: Location,
        },
    }
}
