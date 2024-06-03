import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'listBonDeCommande', data: {breadcrumb: 'ListBonDeCommande'}, loadChildren: () => import('./facture-list/facture-list.module').then(m => m.FactureListModule) },
    { path: 'listBonDeReception', data: {breadcrumb: 'ListBonDeReception'}, loadChildren: () => import('./bon-de-reception/bon-de-reception.module').then(m => m.BonDeReceptionModule) },
    { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./facture-create/facture-create.module').then(m => m.FactureCreateModule) },
    { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]
})
export class FactureRoutingModule { }
