import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./client-list/client-list.module').then(m => m.ClientListModule) },
      { path: 'listAdmin', data: {breadcrumb: 'List Admin'}, loadChildren: () => import('./admin-list/admin-list.module').then(m => m.AdminListModule) },
      { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./client-create/client-create.module').then(m => m.ClientCreateModule) },
      { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
