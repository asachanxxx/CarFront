import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../../_models/_process/dropdownhelper.class';
import { DropDownLoaderService } from '../../_services/_process/dropdownloader.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemExtended, ItemMater, ItemMaterSaveVM, ItemSaveVM } from '../../_models/_process/ItemListingVM.model';
import { ItemsService } from '../../_services/_process/items.service';
import { GlobalService } from '../../_services/global.service';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.component.html',
  styleUrls: ['./addnewcar.component.css'],
  providers: [DropDownLoaderService, ItemsService]
})
export class AddnewcarComponent implements OnInit {

  public newcarform: FormGroup;

  public ItemMater: ItemMater
  public ItemExtended: ItemExtended

  public selectedMakeId: number = -1;
  public selectedModelId: number = -1;
  public selectedYearId: number = -1;
  public selectedBpdytypeId: number = -1;
  public selectedMilageId: number = -1;

  public _allMakess: KeyValuePair[];
  public _allModels: KeyValuePair[];
  public _allYearMakes: KeyValuePair[];
  public _allYearMilages: KeyValuePair[];
  public _allYearBodyTypes: KeyValuePair[];

  public status: boolean = false;

  public unamePattern = "^[a-z0-9_-]{8,15}$";
  public pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  public mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  public emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";


  public phonenumbervalied: boolean = true;
  public emailvalied: boolean = true;
  public nametodisplayvalied: boolean = true;
  public descriptionvalied: boolean = true;
  public askingpricevalied: boolean = true;
  public sellingpricevalied: boolean = true;
  public enginecapacityvalied: boolean = true;
  public doorcountvalied: boolean = true;


  constructor(private globals: GlobalService, private ItemsService: ItemsService, private service: DropDownLoaderService, private router: Router, private toastr: ToastrManager) {
    this.newcarform = new FormGroup({
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      description: new FormControl(null, Validators.required),
      nameToDisplay: new FormControl(null, Validators.required),
      askingPrice: new FormControl(null, Validators.required),
      expectedSelling: new FormControl(null, Validators.required),
      auctionPrice: new FormControl(null, Validators.required),
      enginecapacity: new FormControl(null, Validators.required),
      doorCount: new FormControl(null, Validators.required),


    })

    this.ItemExtended = new ItemExtended();
    this.ItemMater = new ItemMater();
    this.GetAllMakess();
    this.GetAllYears();
    this.GetAllBodyTypes();
    this.GetAllMilages()
  }

  ngOnInit() {
  }

  SaveData() {
    console.log("this.newcarform ", this.newcarform.controls);
    let check: boolean = this.CheckFOrmForvalidation(this.newcarform)
    if (check) {
      let FullSaveVM: ItemSaveVM = new ItemSaveVM();
      FullSaveVM.ItemMaterSaveVM = this.FillObjects(this.newcarform);
      FullSaveVM.ItemExtended = this.ItemExtended
      console.log("FullSaveVM ", FullSaveVM)
      this.ItemsService.SaveItems(FullSaveVM).subscribe(
        data => {
          if (data) {
            this.toastr.successToastr("Hurray!!! Your item was added to the system. After our team reviews that it will be activated. ", this.globals.MessageCaption)
          }
        },
        err => {
          this.toastr.errorToastr("Oppsy!! there is something wrong. Can you please try again?  ", this.globals.MessageCaption)

        }
      )


    } else {
      this.toastr.errorToastr("Oppsy!! there are some error(s) in the application. those are marked in red. please correct and resubmit the form! ", this.globals.MessageCaption)

    }




  }

  FillObjects(passingForm: FormGroup): ItemMaterSaveVM {
    let obj: ItemMaterSaveVM = new ItemMaterSaveVM();
    obj.Id = -1;
    obj.AuctionPrice = passingForm.controls["auctionPrice"].value
    obj.DisplayName = passingForm.controls["nameToDisplay"].value
    obj.PhoneNumber = passingForm.controls["phoneNumber"].value
    obj.Email = passingForm.controls["email"].value
    obj.MoreDetails = passingForm.controls["description"].value
    obj.SellingPrice = passingForm.controls["expectedSelling"].value
    obj.CustomerPrice = passingForm.controls["askingPrice"].value
    obj.EngineCapacity = passingForm.controls["enginecapacity"].value
    obj.DoorCount = passingForm.controls["doorCount"].value
    obj.MakeId = this.selectedMakeId;
    obj.ModelId = this.selectedModelId;
    obj.Year = this.selectedYearId;
    obj.Milage = this.selectedMilageId;
    obj.BodyTypeId = this.selectedBpdytypeId;
    obj.CustomerId=1;
    obj.EstimatePrice =0;
    obj.IsAuction = false;
    obj.IsPriceBargined = false;
    obj.IsValuationDone = false;
    obj.ItemConditionRank= 0;
    obj.Option = 1;
    obj.Transmission = "Manual"
    obj.FuelTyoe = "Petrol"
    return obj;
  }


  CheckFOrmForvalidation(passform: FormGroup): boolean {
    //total procudure control variable
    let retbool = true;
    //css classes control variables
    this.phonenumbervalied = true;
    this.emailvalied = true;
    this.nametodisplayvalied = true;
    this.descriptionvalied = true;
    this.askingpricevalied = true;
    this.sellingpricevalied = true;
    this.enginecapacityvalied = true;

    //checking each form 
    if (passform.controls["phoneNumber"].invalid) {
      retbool = false;
      this.phonenumbervalied = false;
    }
    if (passform.controls["email"].invalid) {
      retbool = false;
      this.emailvalied = false;
    }
    if (passform.controls["nameToDisplay"].invalid) {
      retbool = false;
      this.nametodisplayvalied = false;
    }
    if (passform.controls["description"].invalid) {
      retbool = false;
      this.descriptionvalied = false;
    }
    if (passform.controls["askingPrice"].invalid) {
      retbool = false;
      this.askingpricevalied = false;
    }
    if (passform.controls["expectedSelling"].invalid) {
      retbool = false;
      this.sellingpricevalied = false;
    }
    if (passform.controls["enginecapacity"].invalid) {
      retbool = false;
      this.enginecapacityvalied = false;
    }


    return retbool;
  }


  GetAllBodyTypes() {
    this.service.GetKeyValuePair(4, 0).subscribe(
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
    this.service.GetKeyValuePair(5, 0).subscribe(
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


  ChangeEventMilage(value) {
    this.selectedMilageId = value.selectedItems[0].value.Value;
    console.log("ChangeEventYear: - ", value.selectedItems[0].value.Value);
  }

  ChangeEventBodyType(value) {
    this.selectedBpdytypeId = value.selectedItems[0].value.Value;
    console.log("ChangeEventYear: - ", value.selectedItems[0].value.Value);
  }


}
