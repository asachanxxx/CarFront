import { Injectable, Injector } from '@angular/core';
import { DropDownLoaderService } from './_process/dropdownloader.service';
import { KeyValuePair } from '../_models/_process/dropdownhelper.class';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class FacadeService {

    _dropdownhelper: DropDownLoaderService

    public get accountService(): DropDownLoaderService {
        
        if (!this._dropdownhelper) {
            this._dropdownhelper = this.injector.get(DropDownLoaderService);
        }
        return this._dropdownhelper;
    }


    constructor(private injector: Injector) { }





}