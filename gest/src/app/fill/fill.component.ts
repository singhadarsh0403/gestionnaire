import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule } from '@angular/forms';  
import { Http,Response, Headers, RequestOptions } from "@angular/http";
import {CommonService} from '../common.service';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
// export class FillComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class FillComponent implements OnInit {  
    
     
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";  
   
   
ngOnInit() {    
  this.newService.GetUser1().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser1(user)  
  .subscribe( data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id1;  
this.class= kk.class;  
this.property= kk.property; 
this.entity = kk.entity;
this.data = kk.data; 
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser1(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}  