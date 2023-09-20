import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './home/pages/about/about.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { BodyComponent } from './shared/components/body/body.component';
import{ProductsComponent} from './home/pages/products/products.component';
import { E404Component } from './home/pages/e404/e404.component';
import { CardapioComponent } from './home/pages/cardapio/cardapio.component';
import { PrivacyComponent } from './home/pages/privacy/privacy.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'about',
    title: 'Página Sobre',
    component: AboutComponent
  },
  {
    path: 'product',
    title: 'Página de Produtos',
    component: CardapioComponent
  },
 {
   path: 'contact',
   title: 'Página de Contato',
   component: ContactComponent
 },
 {
 path: 'privacy',
 title: 'Política e Privacidade',
 component: PrivacyComponent
 },

  {
    path: '404',
    title: 'Não Encontrado',
    component: E404Component
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
