import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { EditunidadpComponent } from './views/unidadp/editunidadp/editunidadp.component';
import { EditproveedorComponent } from './views/proveedor/editproveedor/editproveedor.component';
import { EditEntradaComponent } from './views/inventario-ali/registrar-entrada/editentrada/editentrada.component';
import { EditSalidaComponent } from './views/inventario-ali/registrar-salida/editsalida/editsalida.component';
import { EditloteComponent } from './views/lote/editlote/editlote.component';
import { EditespeciesComponent } from './views/especies/editespecies/editespecies.component';
import { LoginComponent } from './views/auth/login/login.component';
import { authGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate: [authGuard]},
  {path: 'unidad', loadChildren: () => import('./views/unidadp/unidadp.module').then(m => m.UnidadpModule), canActivate: [authGuard]},
  {path: 'inventario', loadChildren: () => import('./views/inventario-ali/inventarioali.module').then(m => m.InventarioaliModule), canActivate: [authGuard]},
  {path: 'editar-inventario-entrada/:id', component: EditEntradaComponent, canActivate: [authGuard]},
  {path: 'editar-inventario-salida/:id', component: EditSalidaComponent, canActivate: [authGuard]},
  {path: 'editar-unidad/:id', component: EditunidadpComponent, canActivate: [authGuard]},
  {path: 'proveedor', loadChildren: () => import('./views/proveedor/proveedor.module').then(m => m.ProveedorModule), canActivate: [authGuard]},
  {path: 'editar-proveedor/:id', component: EditproveedorComponent, canActivate: [authGuard]},
  {path: 'lote', loadChildren: () => import('./views/lote/lote.module').then(m => m.LoteModule), canActivate: [authGuard]},
  {path: 'editar-lote/:id', component: EditloteComponent, canActivate: [authGuard]},
  {path: 'especies', loadChildren: () => import ('./views/especies/especies.module').then(m => m.EspeciesModule), canActivate: [authGuard]},
  {path: 'editar-especies/:id', component: EditespeciesComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
