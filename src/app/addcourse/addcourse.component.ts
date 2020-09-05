import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  department_name: string;
  class_name: string;
  @Input() data;


  constructor() {
    console.log(this.data);
   }

 
  
  ngOnInit(): void {
  }

}
