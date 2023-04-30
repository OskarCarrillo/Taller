import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  addressForm = this.fb.group({
    Valor: [null, [Validators.required, Validators.pattern("^[0-9]$")]],
    Tipo: [null, Validators.required ,],
    Vehiculo: [null, Validators.required],
  });

 
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
