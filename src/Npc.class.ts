import { Entity, Game } from './';
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

export class Npc extends Entity {
    public id: string;
    public hp: number = 5;
    public maxHp: number = 5;
    public strength: number = 5;
    public defence: number = 5;
    public friendly: boolean = true;
    public speech: Speech = {
        default: 'Hello there',
    };

    // public actions: {
    //     [name: string]: Function,
    // } = {
    //         'talk': (game: Game, payload?: NpcActionPayload) => {
    //             if (payload && payload.talkSubject) {
    //                 switch (payload.talkSubject) {
    //                     default:
    //                         game.addOutput(<string>this.speech.default);
    //                 }
    //             }
    //
    //             if (!payload && this.speech && this.speech.default) {
    //                 game.addOutput(<string>this.speech.default);
    //             }
    //
    //             game.addOutput(`${this.name} doesn't seem to want to talk...`);
    //             return;
    //         },
    //         'attack': (game: Game, payload: NpcActionPayload) => {
    //             this.removeHp(payload.hp);
    //         }
    //     }

    constructor(options: NpcProperties) {
        super(options);
        Object.assign(this, options);

        if (!options.maxHp) {
            this.maxHp = options.hp || this.hp;
        }
    }

    public removeHp(amount: number): number {
        return this.hp -= amount;
    }
}
