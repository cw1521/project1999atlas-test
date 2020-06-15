import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  routeSub: any;
  itemSub: any;
  item: Item;
  itemType: String;
  itemFood: String;
  itemSlot: String;
  itemSkill: String;
  itemInstrumentType: String;
  itemDmg: String;
  itemStats: String;
  itemSaves: String;
  itemHaste: String;
  itemEffect: String;
  itemWt: String;
  itemCapacity: String;
  itemClass: String;
  itemRace: String;
  itemDeity: String;
  itemDropsFrom: Object[];

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.item = null;
    this.itemType = null;
    this.itemFood = null;
    this.itemSlot = null;
    this.itemSkill = null;
    this.itemInstrumentType = null;
    this.itemDmg = null;
    this.itemStats = null;
    this.itemSaves = null;
    this.itemHaste = null;
    this.itemEffect = null;
    this.itemWt = null;
    this.itemCapacity = null;
    this.itemClass = null;
    this.itemRace = null;
    this.itemDeity = null;
    this.itemDropsFrom = null;
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.itemSub = this.itemService.getItemByName(params.get("itemName"))
      .subscribe(item => {
        this.item = item["data"];
        if (this.item) this.processItem();
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.itemSub.unsubscribe();
  }

  processItem() {
    this.processType();
    this.processFood();
    this.processSlot();
    this.processSkill();
    this.processInstrumentType();
    this.processDmg();
    this.processStats();
    this.processSaves();
    this.processHaste();
    this.processEffect();
    this.processWt();
    this.processCapacity();
    this.processClass();
    this.processRaces();
    this.processDropsFrom();
  }

  processType() {
    let item = this.item;
    if (item.magic && item.lore && item.no_drop) this.itemType = "MAGIC ITEM LORE ITEM NO DROP";
    else if (item.magic && item.lore) this.itemType = "MAGIC ITEM LORE ITEM";
    else if (item.magic && item.no_drop) this.itemType = "MAGIC ITEM NO DROP";
    else if (item.lore && item.no_drop) this.itemType = "LORE ITEM NO DROP";
    else if (item.magic) this.itemType = "MAGIC ITEM";
    else if (item.lore) this.itemType = "LORE ITEM";
    else if (item.no_drop) this.itemType = "NO DROP";
  }

  processFood() {
    if (this.item.food) this.itemFood = this.item.food;
  }

  processSlot() {
    if (this.item.slot.length > 0) {
      this.itemSlot = "Slot: "
      for (let i = 0; i < this.item.slot.length; i++) {
        if (i > 0) this.itemSlot += ` ${String(this.item.slot[i])}`;
        else this.itemSlot += String(this.item.slot[i]);
      }
    }
  }

  processSkill() {
    if (this.item.skill) 
      this.itemSkill = `Skill: ${this.item.skill} Atk Delay: ${this.item.atk_delay}`;
  }

  processInstrumentType() {
    if (this.item.all_instruments)
      this.itemInstrumentType = `All Instrument Types: ${this.item.all_instruments}`;
    else if (this.item.brass)
      this.itemInstrumentType = `Brass Instrument: ${this.item.brass}`;
    else if (this.item.percussion) 
      this.itemInstrumentType = `Percussion Instruments: ${this.item.percussion}`;
    else if (this.item.wind)
      this.itemInstrumentType = `Wind Instrument: ${this.item.wind}`;
    else if (this.item.stringed)
      this.itemInstrumentType = `Stringed Instruments: ${this.item.stringed}`;
  }

  processDmg() {
    if (this.item.dmg)
      this.itemDmg = `DMG: ${this.item.dmg}`;
    if (this.item.ac) {
      if (this.itemDmg) this.itemDmg += `AC: ${this.item.ac}`;
      else this.itemDmg = `AC: ${this.item.ac}`;
    }
  }

  processStats() {
    // let stats = ["strength", "dexterity", "stamina", "charisma", "wisdom", 
    //   "intelligence", "agility", "hitpoints", "mana"];
    
    // for (let stat of stats) {
    //   if (this.item[stat] && stat != "hitpoints" && stat != "mana") {
    //     if (this.itemStats)
    //       this.itemStats += ` ${stat.substring(0, 3).toUpperCase()}: ${this.item[stat]}`;
    //     else
    //       this.itemStats = `${stat.substring(0, 3).toUpperCase()}: ${this.item[stat]}`;
    //   }
    //   else if (this.item[stat] && stat == "hitpoints") {
    //     if (this.itemStats)
    //       this.itemStats += ` HP: ${this.item[stat]}`;
    //     else
    //       this.itemStats = `HP: ${this.item[stat]}`;
    //   } 
    //   else if (this.item[stat] && stat == "mana") {
    //     if (this.itemStats)
    //       this.itemStats += ` MANA: ${this.item[stat]}`;
    //     else
    //       this.itemStats += `MANA: ${this.item[stat]}`;
    //   }
    // } 

    let stats = ["str", "dex", "sta", "cha", "wis", 
      "int", "agi", "hp", "mana"];
    for (let stat of stats) {
      if (this.item[stat])
        if (this.itemStats)
          ` ${stat.toUpperCase()}: ${this.item[stat]}`;
        else 
          `${stat.toUpperCase()}: ${this.item[stat]}`
    }
  }

  processSaves() {
    let saves = ["sv_fire", "sv_disease", "sv_cold", "sv_magic", "sv_poison"];

    for (let save of saves) {
      if (this.item[save]) {
        let label = save.replace("_", " ").toUpperCase();
        if (this.itemSaves) 
          this.itemSaves += ` ${label}: ${this.item[save]}`;
        else
          this.itemSaves = `${label}: ${this.item[save]}`;
      } 
    }
  }

  processHaste() {
    if (this.item.haste)
      this.itemHaste = `Haste: ${this.item.haste}`;
  }

  processEffect() {
    if (this.item.effect)
      this.itemEffect = `Effect: ${this.item.effect}`;
  }

  processWt() {
    this.itemWt = `WT: ${this.item.wt}`;
    if (this.item.weight_reduction)
      this.itemWt += ` Weight Reduction: ${this.item.weight_reduction}`;
    if (this.item.size)
      this.itemWt += ` Size: ${this.item.size}`;
  }

  processCapacity() {
    if (this.item.capacity)
      this.itemCapacity = `Capacity: ${this.item.capacity}`;
    if (this.item.size_capacity)
      this.itemCapacity += ` Size Capacity: ${this.item.size_capacity}`;
  }

  processClass() {
    if (this.item.classes) {
      for (let npcClass of this.item.classes) {
        if (this.itemClass)
          this.itemClass += `, ${npcClass}`;
        else
          this.itemClass = `Class: ${npcClass}`;
      }
    }
  }

  processRaces() {
    if (this.item.races) {
      for (let race of this.item.races) {
        if (this.itemRace)
          this.itemRace += `, ${race}`;
        else
          this.itemRace = `Race: ${race}`;
      }
    }
  }

  processDropsFrom() {
    if (this.item.dropsfrom) {
      this.itemDropsFrom = this.item.dropsfrom;
    }
  }

}
