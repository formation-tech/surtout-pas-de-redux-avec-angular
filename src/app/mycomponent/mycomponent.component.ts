import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  constructor(
    private api: ApiService,
    public store: StoreService
) { }

ngOnInit() {
    this.api.getData();
}
}
