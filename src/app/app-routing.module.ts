import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { HomeComponent } from './components/site/home/home.component';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';



const routes: Routes = [

  {path:'login', component:LoginComponent},

  {
    path: '', component: AppLayoutComponent , canActivate:[AuthGuard] , canActivateChild:[AuthGuard],
        children: [
        {path : 'home', component:HomeComponent },
        {path: 'register', component:RegisterComponent },
        {path:'**', redirectTo:'/login' }
        

        

        

     
      ]}
    




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
