import { Injectable } from '@angular/core';
import { Pasajero } from '../interfaces/pasajero';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios = [
    {'email': 'admin@admin.cl', 'pass': 'admin12', 'tipo': 'admin'},
    {'email': 'user@user.cl', 'pass': 'user12', 'tipo': 'usuario'},
    {'email': 'invi@invi.cl', 'pass': 'inviadmin12', 'tipo': 'invitado'},
  ]

  constructor() { }

  getUsuario(){
    return this.usuarios;
  }

  getUsuarioByEmail(email: string){
    return this.usuarios.find(aux => aux.email === email);
  }

  addUsuario(pasajero: Pasajero){
    this.usuarios.push(pasajero);
  }

  deleteUsuario(){

  }

  updateUsuario(){
    
  }
}
