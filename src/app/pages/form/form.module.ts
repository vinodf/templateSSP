import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { FormRoutingModule } from './form-routing.module';
import { FormListComponent } from './form-list/form-list.component';
import { FormFormComponent } from './form-form/form-form.component';


@NgModule({
  declarations: [
    FormListComponent,
    FormFormComponent
  ],
  imports: [
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
