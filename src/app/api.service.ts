import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private store: StoreService ) { }

  getData() {
      setTimeout(()=> {
          this.store.customer = {
              name: 'Bob',
              age: 25
          }
      }, 2000);
  }
}
