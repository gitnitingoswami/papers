import { Component, OnInit,Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DepartmentService } from './../department.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../model/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paper:Products[]=[];
  categories;
  imageurl;
  catgory:string;
  filterdeparment:Products[]=[];
  constructor( private db:AngularFireDatabase,
    private depart:DepartmentService,
    private route:ActivatedRoute) {

   this.depart.depargetAll().subscribe(p=> {this.paper=p
  
    this.route.queryParamMap.subscribe(params=>{
      this.catgory = params.get('catgory');
    
    this.filterdeparment = (this.catgory)?this.paper.filter(f=>f.Department.toLowerCase()===this.catgory.toLowerCase()):this.paper;
     })
   });
  
this.categories=this.depart.getdepartment();

   }
   filter(query:string){
    console.log(query);
    this.filterdeparment=(query)?
    this.paper.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
    this.paper;
  }


  ngOnInit(): void {
  }

}
