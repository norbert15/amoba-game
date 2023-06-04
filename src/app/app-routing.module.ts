import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./modules/auth/auth.module")
      .then(module => module.AuthModule)
  },
  {
    path: 'game',
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/game/game.module")
      .then(module => module.GameModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
