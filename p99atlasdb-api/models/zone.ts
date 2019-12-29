import mongoose, {Schema} from 'mongoose';
import {ZoneField} from '../../src/app/shared/zoneField';

var zoneSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: String,
    adj_zones: [String],
    min_player_level: String,
    monster_level: [String],
    monster_type:[{
        title: String,
        elements: [String],
        category: [String]
    }],
    notable_npcs: [{
        title: String,
        elements: [String],
        category: [String]
        }],
    unique_items: [{
        title: String,
        elements: [String],
        category: [String]
    }],
    in_or_outdoor: String,
    description: [String],
    dangers: [String],
    benefits: [String],
    travel_to_and_fro: [String],
    races: [String],
    guilds: [String],
    religions: [String],
    tradeskills: [String],
    surr_areas: [String],
    places: [String],
    people: [String],
    maps: [{
        name: String,
        img_link: String,
        location_key: [String],
        comments: [String]
    }],
    continent: String,
    zone_type: String,
    lore: [String],
    history: [String],
    local_color: {
        title: String,
        people: [String],
        places: [String]
    },
    benefits_items: {
        category: String,
        elements: [
            {
                reward_used_by: [String],
                reward: String,
                quest_name: String,
                components: [String],
                turn_in_npc: String
            }
        ]
    },
    strategy: {
        title: String,
        elements: [String],
        category: [String]
    },
    walkthrough: {
        title: String,
        elements: [String],
        category: [String]
    }
}, { collection: "zones" });

var Zone = mongoose.model("zone", zoneSchema);

export {Zone};