import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultTableComponent } from './result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
