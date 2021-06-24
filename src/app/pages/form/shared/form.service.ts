import { Injectable, Injector } from '@angular/core';
import { Form } from "./form.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseResourceService<Form> {

  constructor(protected injector: Injector) {
    super("api/categories", injector, Form.fromJson);
  }

}
