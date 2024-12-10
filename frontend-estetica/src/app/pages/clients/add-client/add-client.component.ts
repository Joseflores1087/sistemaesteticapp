import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  clientForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)],
      ],
      fechaNacimiento: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{7,8}$/)]],
      direccion: ['', Validators.required],
      observation: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.clientForm.valid) {
      const treatmentData = this.clientForm.value;
      console.log('Cliente agregado con éxito!:', treatmentData);
      // Aquí puedes enviar los datos al servidor o realizar otra acción
      this.clientForm.reset(); // Reiniciar el formulario tras enviar los datos
      this.router.navigate(['/pages/treatments/list-treatments']);
    } else {
      console.error('Formulario no válido');
    }
  }
}
