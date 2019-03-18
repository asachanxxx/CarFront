import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { FacadeService } from '../../_services/Facade.Service';
import { DropDownLoaderService } from '../../_services/_process/dropdownloader.service';
import { KeyValuePair } from '../../_models/_process/dropdownhelper.class';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DropDownLoaderService, FacadeService]
})
export class HomeComponent implements OnInit, AfterViewInit {



  public selectedMakeId: number;
  public selectedModelId: number;
  public selectedYearId: number;

  public _allMakess: KeyValuePair[];
  public _allModels: KeyValuePair[];
  public _allYearMakes: KeyValuePair[];

  public status: boolean = false;

  constructor(private _script: ScriptLoaderService, public service: DropDownLoaderService, private router: Router, private toastr: ToastrManager) {
    this.GetAllMakess();

    console.log("this.service ", this.service);
  }

  GetAllMakess() {
    this.service.GetKeyValuePair(1, 0).subscribe(
      data => {
        this._allMakess = data;
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

  GetAllModels(modelId: number) {
    this.service.GetKeyValuePair(2, modelId).subscribe(
      data => {
        this._allModels = data;
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
    this.service.GetKeyValuePair(3, null).subscribe(
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


  ChangeEventMake(value) {
    this.selectedMakeId = value.selectedItems[0].value.Value;
    console.log("ChangeEventMake: - ", value.selectedItems[0].value.Value);
    this.GetAllModels(this.selectedMakeId);
  }


  ChangeEventModel(value) {
    this.selectedModelId = value.selectedItems[0].value.Value;
    this.GetAllYears();
    console.log("ChangeEventModel: - ", value.selectedItems[0].value.Value);
  }

  ChangeEventYear(value) {
    this.selectedYearId = value.selectedItems[0].value.Value;
    console.log("ChangeEventYear: - ", value.selectedItems[0].value.Value);
  }




  ngOnInit() {

  }

  ngAfterViewInit() {
    //this._script.load('./assets/js/scripts/dashboard_visitors.js');
  }



  Wanttofindcar() {

    // console.log(this.selectedMakeId , this.selectedModelId,this.selectedYearId)
    // if(this.selectedMakeId== undefined){
    //   this.toastr.errorToastr('Hi...Give us the vehicle make you like please.', 'Oooops!!!');
    //   this.status = !this.status;     
    //   return;
    // }
    // if(this.selectedModelId== undefined){
    //   this.toastr.errorToastr('Hi...Give us the vehicle model you like please.', 'Oooops!!!');
    //   return;
    // }
    // if(this.selectedYearId== undefined){
    //   this.toastr.errorToastr("Hi...What is the car's made year you lokking for?.", 'Oooops!!!');
    //   return;
    // }

    this.router.navigate(["/findcars"])

  }


}
