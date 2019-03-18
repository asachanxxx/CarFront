import { Component, AfterViewInit } from '@angular/core';
import { GlobalService } from '../../_services/global.service';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
  styles:["app-header.style.css"]
})
export class AppHeader implements AfterViewInit {


  /***************************User Interaction Variables********************************** */

  _show_autologout = true;
  _show_messages = true;
  _show_allert = true;
  _IsLoggout = true;

  

  /*************************************************************************************** */

  constructor( public global:GlobalService) 
  { }

  ngAfterViewInit() {
  }

}
