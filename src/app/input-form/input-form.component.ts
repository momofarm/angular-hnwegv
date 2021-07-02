import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output() eventAddItem = new EventEmitter<string[]>();

  addItem(weight: string, length: string, width: string, height: string) {
    console.log('form field add item pressed');
    let temp: string[] = [weight, length, width, height];
    this.eventAddItem.emit(temp);
  }
}
