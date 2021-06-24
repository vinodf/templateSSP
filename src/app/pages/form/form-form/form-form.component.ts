import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';

import { Form } from '../shared/form.model';
import { FormService } from "../shared/form.service";

@Component({
  selector: 'app-form-form',
  templateUrl: './form-form.component.html',
  styleUrls: ['./form-form.component.css']
})
export class FormFormComponent extends BaseResourceFormComponent<Form> {

  constructor(protected formService: FormService, protected injector: Injector) {
    super(injector, new Form(), formService, Form.fromJson)
   }

   protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }


  protected creationPageTitle(): string {
    return "Cadastro de Nova Formulario";
  }

  protected editionPageTitle(): string {
    const formName = this.resource.name || "";
    return "Editando formulario: " + formName;
  }

}
