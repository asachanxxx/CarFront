import { Component, OnInit, Input } from '@angular/core';
import { ItemListingVM } from '../../../_models/_process/ItemListingVM.model';

@Component({
  selector: 'app-centrallist',
  templateUrl: './centrallist.component.html',
  styleUrls: ['./centrallist.component.css']
})
export class CentrallistComponent implements OnInit {

  @Input() ItemsList:Array<ItemListingVM>
  page: number =2;
  
  constructor() { 

    this.ItemsList = null
  }

  ngOnInit() {
  }

  pageChange(){
    console.log("this.page", this.page)
  }
}
