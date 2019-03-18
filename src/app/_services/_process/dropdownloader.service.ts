import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KeyValuePair, KeyValuePairBool } from '../../_models/_process/dropdownhelper.class';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from '../global.service';



@Injectable()
export class DropDownLoaderService {


    constructor(public _http: HttpClient, public globalsr: GlobalService) {

    }

    GetKeyValuePair(type: number, value: any): Observable<KeyValuePair[]> {
        if (type === 1) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePair[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetMakes`, { headers: headerss });
        } else if (type === 2) {
            console.log("this.globalsr", this.globalsr);
            let Params = new HttpParams();
            Params = Params.set('MakeId', value);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })

            return this._http.get<KeyValuePair[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetModels`, { headers: headerss, params: Params });
        }else
        if (type === 3) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePair[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetYears`, { headers: headerss });
        }
        if (type === 4) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePair[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetAllBodyTypes`, { headers: headerss });
        }
        if (type === 5) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePair[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetAllMilages`, { headers: headerss });
        }



    }

    GetKeyValuePairWithBool(type: number, value: any): Observable<KeyValuePairBool[]> {
        if (type === 1) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePairBool[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetMakesWithBool`, { headers: headerss });
        } else if (type === 2) {
            console.log("this.globalsr", this.globalsr);
            let Params = new HttpParams();
            Params = Params.set('MakeId', value);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })

            return this._http.get<KeyValuePairBool[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetModels`, { headers: headerss, params: Params });
        }else
        if (type === 3) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePairBool[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetYearsWithBool`, { headers: headerss });
        }
        if (type === 4) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePairBool[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetBodyTypeWithBool`, { headers: headerss });
        }
        if (type === 5) {
            console.log("this.globalsr", this.globalsr);

            const headerss = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.globalsr.PrimaryTocken
            })
            return this._http.get<KeyValuePairBool[]>(`${this.globalsr.PrimaryAPI}DropDownPopper/GetMilagesWithBool`, { headers: headerss });
        }



    }



    GetKeyValuePair_WithInput(_param: number, type: number): Observable<KeyValuePair> {
        return new Subject<KeyValuePair>();
    }

}