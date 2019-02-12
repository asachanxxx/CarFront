import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../../_models/_process/dropdownhelper.class';
import { DropDownLoaderService } from '../../_services/_process/dropdownloader.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.component.html',
  styleUrls: ['./addnewcar.component.css'],
  providers: [DropDownLoaderService]
})
export class AddnewcarComponent implements OnInit {

  

  public selectedMakeId: number;
  public selectedModelId: number;
  public selectedYearId: number;

  public _allMakess: KeyValuePair[];
  public _allModels: KeyValuePair[];
  public _allYearMakes: KeyValuePair[];

  public status: boolean = false;


  constructor( public service: DropDownLoaderService, private router: Router, private toastr: ToastrManager) {
    this.GetAllMakess();

    console.log("this.service ", this.service);
  }

  ngOnInit() {
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
  
}
