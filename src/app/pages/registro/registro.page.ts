import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;

  loginForm: FormGroup;
  pasajeroEmail?: string = 'pasajero@pasa.cl';
  pasajeroPass?: string = 'pasa123';
  message = 'Elije qué tipo de usuario deseas ser en la aplicación.';
  role: 'conductor' | 'pasajero' = 'conductor';

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fono: ['', Validators.required],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    const userData = { 
      ...this.loginForm.value,
      role: this.role 
    };
    this.modal?.dismiss(userData, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<any>>;
    if (ev.detail.role === 'confirm') {
      this.message = `${this.role.charAt(0).toUpperCase() + this.role.slice(1)}: ${ev.detail.data.nombre}, 
      Apellido: ${ev.detail.data.apellido}, 
      Email: ${ev.detail.data.email}, 
      Teléfono: ${ev.detail.data.fono}`;
      // Aquí puedes agregar la lógica para guardar el usuario en tu servicio.
    }
  }

  registrarse() {
    if (this.loginForm.valid) {
      // Aquí iría la lógica para registrar al usuario (conductor o pasajero)
      console.log('Registro exitoso:', this.loginForm.value);
      this.router.navigate(['/login']);
    } else {
      // Mostrar algún mensaje de error
      this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos correctamente.',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
  }
}
