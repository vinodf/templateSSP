import { Component, OnInit } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";

import { Form } from '../shared/form.model';
import { FormService } from "../shared/form.service";

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent extends BaseResourceListComponent<Form> implements OnInit {

  dtOptions: DataTables.Settings = {};


  constructor(private formService: FormService) {
    super(formService);
  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'http://demo8056621.mockable.io/destino',
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json"
      },
      columns: [{
        title: 'ID',
        data: 'codDestino'
      }, {
        title: 'First name',
        data: 'dsEdificio'
      }, {
        title: 'Last name',
        data: 'dsDestino'
      }]
    };

    super.ngOnInit();
  }

}
