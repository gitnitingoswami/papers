import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-addyear',
  templateUrl: './addyear.component.html',
  styleUrls: ['./addyear.component.css']
})
export class AddyearComponent implements OnInit {
  department_name: string;
  class_name: string;
  sem_name: string;

  constructor() { }
  
  ngOnInit(): void {
  }

}
