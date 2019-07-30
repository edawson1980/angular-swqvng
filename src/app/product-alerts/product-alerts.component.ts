import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // @Input - property's value will be passed in from component's parent (product list)
  @Input() product;
  // allow for the alert component to emit an event when notify changes (when the notify button is clicked)
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}