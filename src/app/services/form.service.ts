import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formFields: any[] = [];

  constructor() {}

  getFormFields() {
    return this.formFields;
  }

  addFormField(
    fieldType: string,
    label: string,
    required: boolean,
    options: string[] = []
  ) {
    const field = { label, required, options };
    this.formFields.push(field);
  }

  removeFormField(label: string) {
    const index = this.formFields.findIndex((field) => field.label === label);
    if (index !== -1) {
      this.formFields.splice(index, 1);
    }
  }

  clearFormFields() {
    this.formFields = [];
  }
}
