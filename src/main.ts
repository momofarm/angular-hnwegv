import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './app/material-module';
import { GweComponent } from './app/gwe/gwe.component';
import { DragndropComponent } from './app/dragndrop/dragndrop.component';

import { FormFieldAppearanceExample } from './app/form-field-appearance-example';
import { InputFormComponent } from './app/input-form/input-form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [FormFieldAppearanceExample],
  declarations: [
    FormFieldAppearanceExample,
    GweComponent,
    DragndropComponent,
    InputFormComponent
  ],
  bootstrap: [FormFieldAppearanceExample /*GweComponent, DragndropComponent*/]
})
export class AppModule {
 
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
