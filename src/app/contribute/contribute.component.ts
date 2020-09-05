import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,} from '@angular/forms';
import { Validators, FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { splitAtColon } from '@angular/compiler/src/util';
import * as firebase from 'firebase';
import { logging } from 'protractor';
import { AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './../department.service';



@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent {
  categories$;
  selectedCountrybool:boolean= false;
  selectedCoursebool:boolean= false;
  selectedsembool:boolean= false;
ref:AngularFireStorageReference;
task:AngularFireUploadTask;
downloadableURL:any[];
nk:boolean=false
basePath:'/contributedpapers/';
progressValue: Observable<number>;   
  constructor(private db:AngularFireDatabase,
    private storage:AngularFireStorage,
   private route:ActivatedRoute,
   private router:Router,
   private department:DepartmentService ) {


    this.categories$;
   }



 
  delete(){
 }
  public imagePath;
 file
  async onSelectFile($event) { // called each time file input changes
    for(var i=0;i<$event.target.files.length;i++){
      console.log(i);
  this.file= $event.target.files[i];
 let that =this;
 if(this.file){
     const filePath = `${that.basePath}/${this.file.name}`;  // path at which image will be stored in the firebase storage
     that.task =  that.storage.upload(filePath, this.file);    // upload task
     that.progressValue = that.task.percentageChanges();
     (await that.task).ref.getDownloadURL().then(url => {that.downloadableURL = url; });  // <<< url is found here
console.log('ram ');
 }  }} selectedCountry: String = "--Choose Department--";
     Countries=this.department.getdepartment();
    states;
    cities;
    temp;
    departmentchange(country) {
      this.states =this.department.getcourse(country);
      this.temp='/'+country;
      if(country=='other'){
      this.selectedCountrybool=true;
      console.log(this.selectedCountrybool);
 }else {
        this.selectedCountrybool=false;
      }
 console.log(country);
    } changeState(state){
      state='/'+state;
      this.cities=this.department.addyear(this.temp,state);
      console.log(this.temp);
      console.log(state);
      if(state==='/other'){
       this.selectedCoursebool=true;
       console.log(this.selectedCoursebool);
      }
      else{
        this.selectedCoursebool=false;
      }
     

      

    }
    changeSem(city){
      console.log(city);
      if(city=='other')
      {
        this.selectedsembool=true;
      }else
      {
        this.selectedsembool=false;
      }
        
    }
    
    
    save(product){
      product.image=this.downloadableURL;
      var image2=this.downloadableURL;
      this.department.create(product);
      this.router.navigate(['']);
    }
  
    
    }

  





    
  //  var firebaseref=firebase.database().ref('/department/cse');
    //firebaseref.child("department").child('mcom').child('name').set('mcom');
   // firebaseref.child("Btech").child('first year').child('name').set('first sem');
