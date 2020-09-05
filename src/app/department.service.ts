import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Products } from './model/data';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private db:AngularFireDatabase) {

  }
   getdepartment(){
    
   return this.db.list('/department/').snapshotChanges().pipe(map(actions=>{
    return actions.map(action=>({key: action.key, ...action.payload.val() as Products}));
  }));;
   }
   getcourse(country){
    return this.db.list('/department/'+country).valueChanges();
    
   }
   addyear(temp,state){
     console.log(temp);
     console.log(state);
   return this.db.list('/department'+temp+state).valueChanges();
   

   }
   create(product){
   return this.db.list('/contributedpapers/').push(product);

   }
   getAll()
  {
    return this.db.list('/contributedpapers').snapshotChanges().pipe(map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() as Products}));
    }));;;

 }
depargetAll()
 {
   return this.db.list('/adminpaers').snapshotChanges().pipe(map(actions=>{
     return actions.map(action=>({key: action.key, ...action.payload.val() as Products}));
   }));;;

}
adddepartment(department_name){
  var firebaseref=firebase.database().ref('/department');
  return firebaseref.child(department_name).child('name').set(department_name);
}
addclass(department_name,class_name){
    
  var firebaseref=firebase.database().ref('/department');
  return firebaseref.child(department_name).child(class_name).child('name').set(class_name);
  
}
addsem(department_name,class_name ,sem_name){
  var firebaseref=firebase.database().ref('/department');
  return firebaseref.child(department_name).child(class_name).child(sem_name).child('name').set(sem_name);
 
}
 
 
 get(projectId){
   return this.db.object('/contributedpapers/' +projectId);
 }
 update(projectId, product){
  return  this.db.object('contributedpapers' + projectId).update(product);
 }
 delete(projectId){
   return this.db.object('/contributedpapers/' +projectId).remove();
 }
 
  
  // var firebaseref=firebase.database().ref('/department/cse');
   //firebaseref.child("department").child('mcom').child('name').set('mcom');
  // firebaseref.child("Btech").child('first year').child('name').set('first sem');

}
