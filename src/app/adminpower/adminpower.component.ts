import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,} from '@angular/forms';
import { Validators, FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { splitAtColon } from '@angular/compiler/src/util';
import * as firebase from 'firebase';
import { logging } from 'protractor';
import { AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DepartmentService } from './../department.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Products } from '../model/data';
@Component({
  selector: 'app-adminpower',
  templateUrl: './adminpower.component.html',
  styleUrls: ['./adminpower.component.css']
 
})
export class AdminpowerComponent implements OnInit{
  categories$;
  product:any=[];
  router:Router;
 id:string;
  selectedCountrybool:boolean= false;
  selectedCoursebool:boolean= false;
  selectedsembool:boolean= false;
ref:AngularFireStorageReference;
task:AngularFireUploadTask;
downloadableURL:string;
nk:boolean=false
basePath:'/contribute';
progressValue: Observable<number>;   
  department_name: string;
  class_name: string;
  sem_name: string;
  k:string;
  h:string;
  constructor(private db:AngularFireDatabase,
    private storage:AngularFireStorage,
   private department:DepartmentService,
  private  route:ActivatedRoute) {
this. id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id) {this.department.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product= p);
   //  this.downloadableURL=this.product.image;
 console.log(this.product.image)
    }

 
   }
 
  delete(){
    if(!confirm('Are you sure you want to delete this product?')) return;
this.department.delete(this.id);
}
/* async onSelectFile($event) { // called each time file input changes
   const file = $event.target.files[0];
   let that =this;
if(file){
      const filePath = `${that.basePath}/${file.name}`;  // path at which image will be stored in the firebase storage
      that.task =  that.storage.upload(filePath, file);    // upload task
      that.progressValue = that.task.percentageChanges();
      (await that.task).ref.getDownloadURL().then(url => {that.downloadableURL = url; });  // <<< url is found here
  console.log(that.downloadableURL);
        }
       }*/
     selectedCountry: String = "--Choose Department--";
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
 this.k=country;
    } changeState(state){
      state='/'+state;
      this.cities=this.department.addyear(this.temp,state);
      console.log(state);
      if(state==='/other'){
       this.selectedCoursebool=true;
       console.log(this.selectedCoursebool);
      }
      else{
        this.selectedCoursebool=false;
      }
     
this.h=state;
      

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
    
    abc=false;
    save(products){
     
      if(this.id){
      products.image=this.product.image;
      this.db.list('adminpaers/').push(products);
      this.router.navigate(['']);}

      this.db.list('adminpaers/').push(products).then(ref=>{
       if(ref){
        this.abc=true;
        console.log('your data is inserted');
        this.router.navigate[''];
        
       }else{
         this.abc=false;
         console.log('your data is not inserted');
       }
      });
    
    }
   
    addDepartment(abc){
     console.log( abc);
      this.department_name;
    
     this.department.adddepartment(this.department_name);
      
   
  
    }
    addclass($events){
      this.class_name;
     
      this.department.addclass(this.k,this.class_name);
      console.log(this.k,this.class_name);
     
    console.log(this.department_name,this.class_name);
  
    }
    addsem($eventn){
      this.sem_name;
      console.log(this.k,this.h);
      console.log(this.sem_name);
     
    this.department.addsem(this.k,this.h,this.sem_name);
  
  
    }
  

  

    ngOnInit() {

  
    }
  


}

    
  //  var firebaseref=firebase.database().ref('/department/cse');
    //firebaseref.child("department").child('mcom').child('name').set('mcom');
   // firebaseref.child("Btech").child('first year').child('name').set('first sem');
