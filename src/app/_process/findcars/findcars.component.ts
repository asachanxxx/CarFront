import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { KeyValuePair } from '../../_models/_process/dropdownhelper.class';
import { FindCarsService } from '../../_services/_process/findcars.service';
import { ItemListingVM } from '../../_models/_process/ItemListingVM.model';

@Component({
  selector: 'app-findcars',
  templateUrl: './findcars.component.html',
  styleUrls: ['./findcars.component.css'],
  providers:[FindCarsService]
})
export class FindcarsComponent implements OnInit {

  valueFrom: number = 0;
  optionsFrom: Options = {
    floor: 0,
    ceil: 200
  };
  
  valueTo: number = 0;
  optionsTo: Options = {
    floor: 0,
    ceil: 200
  };

  page:number;

  SelectPageSize:number;
  SelectPageSizeItems:Array<KeyValuePair>;


  SelectPageSort:number;
  SelectPageSortItems:Array<KeyValuePair>;

  _ItemListId:number;
  _ItemsList:Array<ItemListingVM>;


  _MakeId:number;
  _MakeItems:Array<KeyValuePair>;

  _ModelId:number;
  _Modeltems:Array<KeyValuePair>;

  _YearId:number;
  _YEarItems:Array<KeyValuePair>;


  _MilageId:number;
  _MilageItems:Array<KeyValuePair>;


  _showList:boolean = true;

  constructor(private CarsService:FindCarsService) { 

    this.SelectPageSizeItems = []
    this.SelectPageSortItems = []
    this.SelectPageSizeItems.push({Id:1,Text:"Show"},{Id:1,Text:"10"},{Id:1,Text:"20"},{Id:1,Text:"50"},{Id:1,Text:"100"})
    this.SelectPageSortItems.push({Id:1,Text:"Sort by"},{Id:1,Text:"Price: Lowest first"},{Id:1,Text:"Price: Highest first"},{Id:1,Text:"Product Name: A to Z"},{Id:1,Text:"Product Name: Z to A"})
    this.getItemList();
  }

  ngOnInit() {
  }


  public getItemList(){
      this.CarsService.GetItemList().subscribe(
        data=>{
          console.log(data);
          this._ItemsList = data;
        }
      ),
      err=>{
        console.log("Error getItemList" , err)
      }

  }
}
