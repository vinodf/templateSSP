import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

import { DataTablesModule } from "angular-datatables"



@NgModule({
  declarations: [
    BreadCrumbComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DataTablesModule
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DataTablesModule,

    // shared components
    BreadCrumbComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule { }
