// src/app/form-field.model.ts
export interface FormField {
  type: string;
  label: string;
  placeholder: string;
  options?: string[]; // Only required for 'select', 'radio', and 'checkbox' types
  required: boolean;
}
