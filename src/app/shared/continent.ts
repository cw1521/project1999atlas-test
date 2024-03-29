import { Zone } from './zone';

export class Continent {
    name: string;
    img_link: string;
    indoorZones: Zone[];
    outdoorZones: Zone[];
    cities: Zone[];
    planes: Zone[];

    constructor() {
        this.name = null;
        this.img_link = null;
        this.indoorZones = null;
        this.outdoorZones = null;
        this.cities = null;
        this.planes = null;
    }

    setCities(cities: Zone[]) {
        this.cities = cities;
    }

    setIndoorZones(indoorZones: Zone[]) {
        this.indoorZones = indoorZones;
    }

    setOutdoorZones(outdoorZones: Zone[]) {
        this.outdoorZones = outdoorZones;
    }

    setPlanes(planes: Zone[]) {
        this.planes = planes;
    }

    getCities() {
        return this.cities;
    }

    getIndoorZones() {
        return this.indoorZones;
    }

    getOutdoorZones() {
        return this.outdoorZones;
    }

    getPlanes() {
        return this.planes;
    }

}