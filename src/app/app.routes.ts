import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotAdminComponent } from './pages/not-admin/not-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { PrdcDashboardComponent } from './pages/dashboard/prdc-dashboard/prdc-dashboard.component';
import { HomeDashboardComponent } from './pages/dashboard/home-dashboard/home-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'not-admin', component: NotAdminComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeDashboardComponent },
      { path: 'produtos', component: PrdcDashboardComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
