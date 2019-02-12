import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    private _primaryAPI: string = "http://localhost:1245/";
    public get PrimaryAPI() {
        return this._primaryAPI;
    }
    public set PrimaryAPI(PrimaryApiret: string) {
        this._primaryAPI = PrimaryApiret
    }

    

    private _primaryTocken: string = "Bearer ansKFMPonKyab-TBmgQAThXNKoSAt8ZHej31-Is1a0X0wo5iSIjiaXvRdHscyr9J3v3iG3PTg8_BnoZaiMRCEY03zAONYrKppp1ZdSAgGenMcqeW-UYyKKkOEk7UhXO3l1_-9kXc9rBnekuOIqCrH8TfbcF_G_hgUVFS2N8omQYetJ-VobtaW8n-8AZL72wigGeckLtjZhm12aEEwxsDxnrrY4WA0kB3T9eNURvSO_9lwjJ2_oBRwOPojcAh-dfrlOln0DkSpYL8F2Si2Od63pesFnMZ9uhBkYjZvWCfeN0k8-V7jvBLae_Pz_ljoYM1rVRF-CXwQgBOKiKmSi9h65DUAsqaQY8gLXb69xqPmomscXLn4yVwsdkNyZlayuVlL3EhQgjslgss6xqiUw36SPSsfTN9rMmRQr3dpiJogn61U7kF5FqCRAhmjj_JPOo8aXoh1EGkov0ArerB6lgMDvt3UM_f8-Dzi0i8vtZrstg" ;
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