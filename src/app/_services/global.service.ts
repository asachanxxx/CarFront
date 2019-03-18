import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    private _primaryAPI: string = "http://localhost:9500/";
    public get PrimaryAPI() {
        return this._primaryAPI;
    }
    public set PrimaryAPI(PrimaryApiret: string) {
        this._primaryAPI = PrimaryApiret
    }

    private _MessageCaption : string ="Sell Yout Car";
    public get MessageCaption() : string {
        return this._MessageCaption;
    }
    public set MessageCaption(v : string) {
        this._MessageCaption = v;
    }

    private _primaryTocken: string = "Bearer uTOCV8g9CRFk01n0Yn2anEr6BVIEVuZGKaDn7w_0sM5AnvOOk2D3KgTY67W7Wc-ZwF3jjb4LgkRkNTfns-Ctvs_IIgMNKXZLPNuRDjnGn2pqcvOmmauWGQUNFkDJOFfrvDYlROItReXB48KWbXygOQXX1jjeGZYArnT40Hnh6gL6LCe69sl40u1S4nIC6m3wTuwiODwWAWxhOueGv_bRalyji3f-S44ETS4yOncfzx5oPxh5DH3I3oyHIS7eduLZYrrXkFowTff604ynnrsn3cbDOP-PT1u8saOhXzQXQ9BKU6Hp2E_FBG1oKs4HO5otOA1r21NGKE7oxE7PIWYb1m68puAj9lhX7wffj4UdXr4p6rf44gCtFUlhui1L_drnWXPlW-jVlkdEG6Y6G6WO3804pk2HBnXaD8cKZ--8Y2Wdnrc6DfU4QH4v_SRcQHs3FlRkIZfbtdv4SpB7rEKwvb_yZvctdPdmrFTWStD_T1o" ;
    public get PrimaryTocken() {
        return this._primaryTocken;
    }
    public set PrimaryTocken(PrimaryTockenret: string) {
        this._primaryTocken =PrimaryTockenret;
    }

    
    private _LoginUserName : string = "Anonymous";
    public get LoginUserName() : string {
        return this._LoginUserName;
    }
    public set LoginUserName(v : string) {
        this._LoginUserName = v;
    }
    
    
    private _LoginUserId : number =1;
    public get LoginUserId() : number {
        return this._LoginUserId;
    }
    public set LoginUserId(v : number) {
        this._LoginUserId = v;
    }
    


}