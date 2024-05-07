import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./facture-list/facture-list.module').then(m => m.FactureListModule) },
    { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./facture-create/facture-create.module').then(m => m.FactureCreateModule) },
    { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]
})
export class FactureRoutingModule { }
