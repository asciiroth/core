import { EntityProperties } from './';
export interface NpcProperties extends EntityProperties {
    speech?: any;
    hp: number;
    maxHp: number;
    strength: number;
    defence: number;
    friendly: boolean;
}
