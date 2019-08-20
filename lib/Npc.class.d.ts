import { Entity } from './';
import { NpcProperties } from './interfaces';
export interface NpcAction {
    action: string;
    data: NpcActionPayload;
}
export interface NpcActionPayload {
    talkSubject?: string;
    hp?: number;
}
export interface Speech {
    [id: string]: string | Speech;
}
export declare class Npc extends Entity {
    id: string;
    hp: number;
    maxHp: number;
    strength: number;
    defence: number;
    friendly: boolean;
    speech: Speech;
    constructor(options: NpcProperties);
    removeHp(amount: number): number;
}
