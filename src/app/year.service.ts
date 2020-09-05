import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Uplaod } from './model/upload';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor( private db: AngularFireDatabase) { }

 
}
