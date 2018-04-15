import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the FireDataServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireDataServiceProvider {

  constructor(private db:AngularFireDatabase) {
    console.log('Hello FireDataServiceProvider Provider');
  }

  getAll(){
    return this.db.list("stores").valueChanges();
  }

  update(id:string,store:any){
    this.db.object("stores/"+id).update(store);
  }

}