import { Zone } from './';

export class Zones {
	private _zones: Zone[] = [];

	public get zones(): Zone[] {
		return this._zones;
	}

	public findZone(zone: Zone) {
		return this._zones.find(_zone => _zone.name === zone.name);
	}

	public addZone(zone: Zone) {
		if (!this.findZone(zone)) {
			this._zones.push(zone);
		}
	}

	public removeZone(zone: Zone) {
		this._zones = this._zones.filter(_zone => _zone.name !== zone.name);
	}
}
