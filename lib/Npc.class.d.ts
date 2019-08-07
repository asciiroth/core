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
    speech: Speech;
    hp: number;
    strength: number;
    defence: number;
    friendly: boolean;
    actions: {
        [name: string]: Function;
    };
    constructor(options: NpcProperties);
    action(action: string, payload: NpcAction): any;
    removeHp(amount: number): number;
    addAction(name: string, action: Function): void;
}
