import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './_services/global.service';
import { FindcarsComponent } from './_process/findcars/findcars.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { CommonModule } from '@angular/common';
import { CentrallistComponent } from './_process/findcars/centrallist/centrallist.component';
import { PipesModule } from './_pipes/pipes.module';
import { ImageuploadComponent } from './_process/imageupload/imageupload.component';
import { AddnewcarComponent } from './_process/addnewcar/addnewcar.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';


@NgModule({
  declarations: [
    AppComponent,
    FindcarsComponent,
    CentrallistComponent,
    ImageuploadComponent,
    AddnewcarComponent,
    CustomerRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    Ng5SliderModule,
    CommonModule,FormsModule,
    NgSelectModule,
    PipesModule,ReactiveFormsModule
    
   
    
  ],
  providers: [ScriptLoaderService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
