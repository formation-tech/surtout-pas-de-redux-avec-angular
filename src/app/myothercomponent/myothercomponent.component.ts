import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-myothercomponent',
  templateUrl: './myothercomponent.component.html',
  styleUrls: ['./myothercomponent.component.css']
})
export class MyothercomponentComponent implements OnInit {
  constructor(public store: StoreService) { }

  ngOnInit() {}
}
