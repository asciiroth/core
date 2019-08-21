import { Npc, Entity } from '../';

export interface LocationProperties {
    name: string;
    id?: number;
    description?: string;
    image?: string;
    entities?: (Npc | Entity)[];
    coords?: [number, number];
    custom: {
        [id: string]: any;
    }
}
