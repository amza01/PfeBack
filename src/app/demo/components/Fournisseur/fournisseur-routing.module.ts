import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./fournisseur-list/fournisseur-list.module').then(m => m.FournisseurListModule) },
      { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./fournisseur-create/fournisseur-create.module').then(m => m.FournisseurCreateModule) },
      { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
