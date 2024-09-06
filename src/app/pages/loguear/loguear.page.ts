import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-loguear',
  templateUrl: './loguear.page.html',
  styleUrls: ['./loguear.page.scss'],
})
export class LoguearPage implements OnInit {

  loginForm: FormGroup;
  emailValue?: string = 'admin@admin.cl';
  passValue?: string = 'admin123';
  
  constructor(
    private router: Router, 
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private formBuilder: FormBuilder,
    private menuController: MenuController,
    private usuariosService: UsuariosService,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required,Validators.minLength(6)]],
    });
  }
    
  ngOnInit() {
    this.menuController.enable(false);
  }

  async loguear() {

    // CREAMOS EL LOADING
    const loading = this.loadingController.create({
      message: 'Cargando.....',
      duration: 2000
    });

    // CREAMOS LA ALERTA
    const alert = this.alertController.create({
      header: 'Acceso denegado',
      message: 'Usuario o contraseña incorrectas!',
      buttons: ['OK']
    });

    const email = this.emailValue;
    const pass = this.passValue;

    // PREGUNTAR POR EL USUARIO
    const aux = this.usuariosService.getUsuario();
    const usuario = aux.find(aux => aux.email === email && aux.pass === pass);

    if ( usuario ) {
      localStorage.setItem('usuarioLogin', JSON.stringify(usuario));
      (await loading).present();
      
      setTimeout(async() => {
        (await loading).dismiss();

        if ( usuario.tipo === 'admin' ) {
          this.router.navigate(['/usuarios']);
        } else if ( usuario.tipo === 'usuario' ) {
          this.router.navigate(['/usuario-dashboard']);
        } else {
          this.router.navigate(['/invitado-dashboard']);
        }
      },2000);

    } else {
      (await alert).present();
      this.emailValue = '';
      this.passValue = '';
    }
  }
}

