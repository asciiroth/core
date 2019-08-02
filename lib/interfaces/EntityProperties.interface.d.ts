import { Game } from '../';
export interface EntityProperties {
    id?: string;
    referenceName: string;
    description: string;
    _game: Game;
    actions: {
        [name: string]: Function;
    };
}
