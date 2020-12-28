import { GetuserComponent } from './getuser/getuser.component';
import { CreateaccountuserComponent } from './createaccountuser/createaccountuser.component';
import { AuthenticationGuard } from './authentication.guard';
import { ProfilComponent } from './profil/profil.component';
import { DetailsproduitsComponent } from './home/detailsproduits/detailsproduits.component';
import { FormComponent } from './home/form/form.component';
import { BoodyComponent } from './home/boody/boody.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ErrurComponent } from './errur/errur.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent
  },{
    path: 'createaccountuser', component: CreateaccountuserComponent
  },
  {
    path: 'home', component: HomeComponent, children:
    [
      { path: '', component: BoodyComponent},
      { path: 'produits', component: ProduitsComponent},
      { path: 'from', component: FormComponent},
      { path: 'details/:id', component: DetailsproduitsComponent},
      { path: 'profil', component: ProfilComponent
    }
,
    {
      path: 'userget', component: GetuserComponent
    }

    ]
    ,canActivate : [AuthenticationGuard]
  },
  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'formulaire', component: FormulaireComponent
  },

  {
    path: '**', component: ErrurComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
