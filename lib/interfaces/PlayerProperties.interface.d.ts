import { Race, Class, Zone, World, Location, Game } from '../';
export interface PlayerProperties {
    xp?: number;
    name: string;
    race?: Race;
    class?: Class;
    coords: [number, number];
    zone?: Zone;
    world?: World;
    location?: Location;
    game?: Game;
    onDeath?: Function;
}
