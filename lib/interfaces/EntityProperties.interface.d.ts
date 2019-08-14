import { Game } from '../';
export interface EntityProperties {
    id?: string;
    referenceName: string;
    description: string;
    _game: Game;
    actions: string[];
    custom: {
        [id: string]: any;
    };
}
