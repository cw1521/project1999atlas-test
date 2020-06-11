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

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.item = null;
    this.routeSub = this.route.paramMap.subscribe(params => {
      // console.log(params.get("itemName"));
      this.itemSub = this.itemService.getItemByName(params.get("itemName"))
      .subscribe(item => {
        item = item["data"];
        console.log(item);
      });
    });

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.itemSub.unsubscribe();
  }

}
