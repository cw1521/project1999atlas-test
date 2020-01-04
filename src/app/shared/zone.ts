import { Map } from './map';
import { ZoneField } from './zoneField';
import { Quest } from './quest';

export class Zone {
    id: Number
    name: String
    location: String
    adj_zones: String[]
    min_player_level: String
    monster_level: String[]
    monster_type: ZoneField[]
    notable_npcs: ZoneField[]
    unique_items: ZoneField[]
    in_or_outdoor: String
    description: String[]
    dangers: String[]
    benefits: String[]
    travel_to_and_fro: String[]
    races: String[]
    guilds: String[]
    religions: String[]
    tradeskills: String[]
    surr_areas: String[]
    places: String[]
    people: String[]
    maps: Map[]
    continent: String
    zone_type: String
    lore: String[]
    history: String[]
    local_color: {
        title: String,
        people: String[],
        places: String[]
    }
    benefits_items: ZoneField
    strategy: ZoneField[]
    related_quests: ZoneField[]

    // {
    //     title: String,
    //     elements: [String],
    //     category: [String]
    // }
    walkthrough: String[]

    constructor() {
        this.id = null;
        this.name = null;
        this.location = null;
        this.adj_zones = null;
        this.min_player_level = null;
        this.monster_level = null;
        this.monster_type = null;
        this.notable_npcs = null;
        this.unique_items = null;
        this.in_or_outdoor = null;
        this.description = null;
        this.dangers = null;
        this.benefits = null;
        this.travel_to_and_fro = null;
        this.races = null;
        this.guilds = null;
        this.religions = null;
        this.tradeskills = null;
        this.surr_areas = null;
        this.places = null;
        this.people = null;
        this.maps = null;
        this.continent = null;
        this.zone_type = null;
        this.lore = null;
        this.history = null;
        this.local_color = null;
        this.benefits_items = null;  
        this.strategy = null;
        this.walkthrough = null;
    }
}