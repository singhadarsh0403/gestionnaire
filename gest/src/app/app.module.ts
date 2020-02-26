import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import {CommonService} from './common.service';
import { EditEntityComponent } from './edit-entity/edit-entity.component';
import { FillComponent } from './fill/fill.component';
import { SearchComponent } from './search/search.component';
import { ClassComponent } from './class/class.component';  
import {AppRoutingModule} from "./app-routing.module"
  
  
@NgModule({  
  declarations: [  
    AppComponent, EditEntityComponent, FillComponent, SearchComponent, ClassComponent  
  ],  
  imports: [  
    RouterModule.forRoot([]),
    BrowserModule,HttpModule,FormsModule,RouterModule ,
    AppRoutingModule
  ],  
  providers: [CommonService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  