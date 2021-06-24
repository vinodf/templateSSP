import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Form extends BaseResourceModel {
  constructor(
    public id?:number,
    public name?: string,
    public description?: string
  ){
    super();
  }


  static fromJson(jsonData: any): Form {
    return Object.assign(new Form(), jsonData);
  }
}
