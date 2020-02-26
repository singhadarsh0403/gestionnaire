import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule } from '@angular/forms';  
import { Http,Response, Headers, RequestOptions } from "@angular/http";
import {CommonService} from '../common.service';  

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
  

export class ClassComponent {  
    
     
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";  
   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe( data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;  
this.address= kk.address; 
this.range = kk.range;
this.description = kk.description; 
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}  