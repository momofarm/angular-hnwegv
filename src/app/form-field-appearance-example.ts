import { Component, Output, EventEmitter } from '@angular/core';

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html'
})
export class FormFieldAppearanceExample {
  @Output() eventAddItem2 = new EventEmitter<string[]>();

  addItem(value: string[]) {
    console.log('AppModule add item');
    let s: string = value[0] + ' ' + value[1] + ' ' + value[2] + ' ' + value[3];
    this.eventAddItem2.emit(value);
    // this.movies.push(s);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
