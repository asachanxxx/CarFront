import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../_services/_process/fileupload.service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../_services/global.service';


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css'],
  providers: [FileUploadService]
})



export class ImageuploadComponent implements OnInit {

  imageurl: string = "./assets/img/cars/01.jpg";
  fileToUpload: File;



  constructor(private fileservice: FileUploadService , private _http:HttpClient,private globalsr: GlobalService) { }

  ngOnInit() {
  }


  onFileChange(event) {
    this.fileToUpload = event.target.files[0];
    console.log(event)

  }

  // OnclickSubmit(){
  //     var fd = new FormData();
  //     fd.append("file" , this.fileToUpload, this.fileToUpload.name);
  //     console.log("FD" , fd)
  //     this._http.post(`${this.globalsr.PrimaryAPI}Uploader/UploadSingleImage`,fd ,{
  //       reportProgress:true,
  //       observe:"events"
  //     }).subscribe(
  //       event=>{
  //         console.log("Resopose from server => " , event)
  //       }
  //     ),
  //     err=>{
        
  //       console.log("Error from server " , err)
  //     }
  // }

  OnclickSubmit(){
    var fd = new FormData();
    fd.append("file" , this.fileToUpload, this.fileToUpload.name);
    console.log("FD" , fd)
    this._http.post(`${this.globalsr.PrimaryAPI}Uploader/UploadSingleImage`,fd ).subscribe(
      res=>{
        console.log("Resopose from server => " , res)
        window.alert("Successfull")
      }
    ),
    err=>{
      
      console.log("Error from server " , err)
    }
}



}
