import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';
import { ItemSaveVM } from '../../_models/_process/ItemListingVM.model';

@Injectable()
export class ItemsService {

    constructor(private _http: HttpClient, private globalsr: GlobalService) {
    }


    SaveItems(model: ItemSaveVM): Observable<boolean> {
        const headerss = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.globalsr.PrimaryTocken
        })
        return this._http.post<boolean>(`${this.globalsr.PrimaryAPI}SearchItems/GetSaveItemFull`, model, { headers: headerss });
    }

}