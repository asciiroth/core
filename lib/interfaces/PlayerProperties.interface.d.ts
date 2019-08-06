import { Race, Class, Zone, World, Game } from '../';
export interface PlayerProperties {
    xp?: number;
    name: string;
    race?: Race;
    class?: Class;
    coords: [number, number];
    zone: Zone;
    world?: World;
    game?: Game;
    onDeath?: Function;
}
