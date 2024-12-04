import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-treatments',
  templateUrl: './add-treatments.component.html',
  styleUrls: ['./add-treatments.component.css'],
})
export class AddTreatmentsComponent implements OnInit {
  treatmentForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.treatmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      state: ['Alta', [Validators.required, Validators.min(0)]],
      observation: [''],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.treatmentForm.valid) {
      const treatmentData = this.treatmentForm.value;
      console.log('Tratamiento agregado:', treatmentData);
      // Aquí puedes enviar los datos al servidor o realizar otra acción
      this.treatmentForm.reset(); // Reiniciar el formulario tras enviar los datos
      this.router.navigate(['/pages/treatments/list-treatments']);
    } else {
      console.error('Formulario no válido');
    }
  }
}
