import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
  department_name: string;

  constructor() { }
  addDepartment($event){
    $event
    console.log($event);
     var firebaseref=firebase.database().ref('/department');
  return firebaseref.child(this.department_name).child('name').set(this.department_name);

  }

  ngOnInit(): void {
  }

}
