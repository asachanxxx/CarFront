import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  items: any;
  selectedMakeId:number;
  
  constructor(private _script: ScriptLoaderService) {
    this.items = [];
    console.log(this.items);
    this.items.push({ id: 1, name: 'New item' })
    this.items.push({ id: 1, name: 'New item2' })
    
  }

  

  ngOnInit() {

  }

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/dashboard_visitors.js');
  }





}
