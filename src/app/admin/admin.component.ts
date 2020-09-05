import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DepartmentService } from './../department.service';
import { SubscriptionLike, Observable } from 'rxjs';
import { Products } from '../model/data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnDestroy {
  paper:any;
  products:Products[];
  filterpaper;
  subscription:SubscriptionLike;
  query;

  constructor(private db:AngularFireDatabase,
    private depart:DepartmentService) { 
     


   this.subscription=this.depart.getAll().subscribe(p=>this.filterpaper= this.products =p);
  console.log(this.products);
  }
  delete(id){
    if(!confirm('Are you sure you want to delete this product?')) return;

    this.depart.delete(id);
    };
 filter(query){
    console.log(query);
    this.filterpaper=(query)?
    this.products.filter(p=>p.title.includes(query)):
    this.products;
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
  
}
 
}
