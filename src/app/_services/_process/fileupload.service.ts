import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../global.service';

@Injectable()
export class FileUploadService {


    constructor(private _http: HttpClient, private globalsr: GlobalService) {


    }

    postFiles(caption: string, filetouplaod: File) {

        const headerss = new HttpHeaders({
            // 'Content-Type': 'multipart/form-data',
            'Authorization': this.globalsr.PrimaryTocken
        })

        headerss.append('Accept', 'application/json');

        let file: File = filetouplaod;

        let formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        return this._http.post(`${this.globalsr.PrimaryAPI}Uploader/UploadSingleImage`, formData, {headers:headerss})
    }


}