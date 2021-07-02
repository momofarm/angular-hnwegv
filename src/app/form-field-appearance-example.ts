import { Component } from '@angular/core';

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html'
})
export class FormFieldAppearanceExample {
  @Output() eventAddItem = new EventEmitter<string[]>();

  addItem(weight: string, length: string, width: string, height: string) {
    console.log('form field add item pressed');
    let temp: string[] = [weight, length, width, height];
    this.eventAddItem.emit(temp);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
