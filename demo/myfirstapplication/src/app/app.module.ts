import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrurComponent } from './errur/errur.component';
import { NovbarComponent } from './home/novbar/novbar.component';
import { FootorComponent } from './home/footor/footor.component';
import { BoodyComponent } from './home/boody/boody.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { ProduitsComponent } from './produits/produits.component';
import { FormComponent } from './home/form/form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailsproduitsComponent } from './home/detailsproduits/detailsproduits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfilComponent } from './profil/profil.component';
import { CreateaccountuserComponent } from './createaccountuser/createaccountuser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { ProduitsPipe } from './pipes/produits.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrurComponent,
    NovbarComponent,
    FootorComponent,
    BoodyComponent,
    FormulaireComponent,
    ProduitsComponent,
    FormComponent,
    DetailsproduitsComponent,
    ProfilComponent,
    CreateaccountuserComponent,
    GetuserComponent,
    ProduitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  ,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
