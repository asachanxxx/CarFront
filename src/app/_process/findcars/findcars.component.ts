import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { KeyValuePair, KeyValuePairBool } from '../../_models/_process/dropdownhelper.class';
import { FindCarsService } from '../../_services/_process/findcars.service';
import { ItemListingVM } from '../../_models/_process/ItemListingVM.model';
import { DropDownLoaderService } from '../../_services/_process/dropdownloader.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-findcars',
  templateUrl: './findcars.component.html',
  styleUrls: ['./findcars.component.css'],
  providers: [FindCarsService, DropDownLoaderService]
})
export class FindcarsComponent implements OnInit {

  saveUsername:boolean;
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

  

  SelectPageSize: number;
  SelectPageSizeItems: Array<KeyValuePair>;


  SelectPageSort: number;
  SelectPageSortItems: Array<KeyValuePair>;

  _ItemListId: number;
  _ItemsList: Array<ItemListingVM>;

  _ModelId: number;
  _Modeltems: Array<KeyValuePairBool>;

  _YearId: number;
  _YEarItems: Array<KeyValuePairBool>;


  _MilageId: number;
  _MilageItems: Array<KeyValuePairBool>;


  public _MakeItems: Array<KeyValuePairBool>;
  public _allYearMakes: KeyValuePairBool[];
  public _allYearMilages: KeyValuePairBool[];
  public _allYearBodyTypes: KeyValuePairBool[];


  _showList: boolean = true;

  constructor(private CarsService: FindCarsService, public service: DropDownLoaderService, private router: Router, private toastr: ToastrManager) {

    this.SelectPageSizeItems = []
    this.SelectPageSortItems = []
    this.SelectPageSizeItems.push({ Id: 1, Text: "Show" }, { Id: 1, Text: "10" }, { Id: 1, Text: "20" }, { Id: 1, Text: "50" }, { Id: 1, Text: "100" })
    this.SelectPageSortItems.push({ Id: 1, Text: "Sort by" }, { Id: 1, Text: "Price: Lowest first" }, { Id: 1, Text: "Price: Highest first" }, { Id: 1, Text: "Product Name: A to Z" }, { Id: 1, Text: "Product Name: Z to A" })
    this.GetAllMakess();
    this.GetAllBodyTypes();
    this.GetAllMilages();
    this.GetAllYears();
    this.getItemList();
  }

  ngOnInit() {
  }


  public getItemList() {
    this.CarsService.GetItemList().subscribe(
      data => {
        console.log(data);
        this._ItemsList = data;
      }
    ),
      err => {
        console.log("Error getItemList", err)
      }

  }

  GetAllMakess() {
    this.service.GetKeyValuePairWithBool(1, 0).subscribe(
      data => {
        this._MakeItems = data
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("Finished");
      }
    )

  }

  GetAllBodyTypes() {
    this.service.GetKeyValuePairWithBool(4, 0).subscribe(
      data => {
        this._allYearBodyTypes = data;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("Finished");
      }
    )
  }

  GetAllMilages() {
    this.service.GetKeyValuePairWithBool(5, 0).subscribe(
      data => {
        this._allYearMilages = data;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("Finished");
      }
    )
  }

  GetAllYears() {
    this.service.GetKeyValuePairWithBool(3, null).subscribe(
      data => {
        this._allYearMakes = data;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("Finished");
      }
    )
  }

  ApplyMake(events){
    console.log(this._MakeItems);
  }

  ApplyYear(events){
    console.log(this._allYearMakes);
  }

  ApplyMilages(events){
    console.log(this._allYearMilages);
  }

  ApplyBodyTypes(events){
    console.log(this._allYearBodyTypes);
  }
 
  

}
