import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'screenplash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'screenplash',
    loadChildren: () => import('./pages/screenplash/screenplash.module').then( m => m.ScreenplashPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./pages/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'loguear',
    loadChildren: () => import('./pages/loguear/loguear.module').then( m => m.LoguearPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'programar-viaje',
    loadChildren: () => import('./pages/programar-viaje/programar-viaje.module').then( m => m.ProgramarViajePageModule)
  },
  {
    path: 'pedir-viaje',
    loadChildren: () => import('./pages/pedir-viaje/pedir-viaje.module').then( m => m.PedirViajePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/menu/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/menu/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./TipoUsers/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detalle-admin',
    loadChildren: () => import('./TipoUsers/admin/detalle-admin/detalle-admin.module').then( m => m.DetalleAdminPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./TipoUsers/pasajero/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detalle-pasajero',
    loadChildren: () => import('./TipoUsers/pasajero/detalle-pasajero/detalle-pasajero.module').then( m => m.DetallePasajeroPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./TipoUsers/conductor/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detalle-conductor',
    loadChildren: () => import('./TipoUsers/conductor/detalle-conductor/detalle-conductor.module').then( m => m.DetalleConductorPageModule)
  },
  // {
  //   path: 'usuarios',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./TipoUsers/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  //     },
  //     {
  //       path: ':email',
  //       loadChildren: () => import('./TipoUsers/admin/detalle-admin/detalle-admin.module').then( m => m.DetalleAdminPageModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }