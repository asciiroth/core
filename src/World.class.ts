import { Zones, Zone } from './';
import { ZoneProperties } from './interfaces';

export class World {
	private _zones: Zones = new Zones();

    constructor(
		private name: string
	) {}

	public get zones(): Zone[] {
		return this._zones.zones;
	}

	public getZone(zone: Zone) {
		return this._zones.findZone(zone);
	}

	public newZone(zone: ZoneProperties): Zone {
		const newZone = new Zone(zone);
		this._zones.addZone(newZone);
		return newZone;
	}
}
