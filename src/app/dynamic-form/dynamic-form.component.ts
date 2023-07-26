import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({});
  }

  getFieldControl(fieldName: string): FormControl {
    return this.form.get(fieldName) as FormControl;
  }

  addField() {
    const id = this.fields.length;
    const newFieldName = `Field ${id}`;
    this.fields.push({ id, name: newFieldName });
    this.form.addControl(
      newFieldName + '_type',
      this.formBuilder.control('2') // Default type value '2'
    );
    this.form.addControl(
      newFieldName + '_value',
      this.formBuilder.control('', Validators.required)
    );
  }

  removeField(index: number) {
    if (index >= 0 && index < this.fields.length) {
      const fieldToRemove = this.fields[index];
      this.form.removeControl(fieldToRemove.name + '_type');
      this.form.removeControl(fieldToRemove.name + '_value');
      this.fields.splice(index, 1);
    }
  }

  submitForm() {
    const result: any[] = [];

    for (const field of this.fields) {
      const type = this.form.get(field.name + '_type')?.value;
      const value = this.form.get(field.name + '_value')?.value;

      result.push({ key: type, value: value });
    }

    console.log(result);
  }
}
