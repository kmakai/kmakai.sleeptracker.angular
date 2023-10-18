import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RecordsListComponent } from './components/records-list/records-list.component';

@NgModule({
  declarations: [AppComponent, FormComponent, RecordsListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
