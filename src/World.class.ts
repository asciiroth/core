import { Zones, Zone } from './';

export class World {
	private _zones: Zones = new Zones();

    constructor(
		private name: string
	) {}

	public get zones(): Zones {
		return this._zones;
	}

	public getZone(zone: Zone) {
		return this._zones.findZone(zone);
	}

	public addZone(zone: Zone) {
		this._zones.addZone(zone);
	}
}
