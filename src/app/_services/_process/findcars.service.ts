import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KeyValuePair } from '../../_models/_process/dropdownhelper.class';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { ItemListingVM } from '../../_models/_process/ItemListingVM.model';


@Injectable()
export class FindCarsService {

    constructor(public _http: HttpClient, public globalsr: GlobalService) {

    }

    GetItemList():Observable<ItemListingVM[]>{

        const headerss = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.globalsr.PrimaryTocken
        })
        return this._http.get<ItemListingVM[]>(`${this.globalsr.PrimaryAPI}SearchItems/GetItemList`, { headers: headerss });

    }



}