import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'listDevis', data: {breadcrumb: 'List Devis'}, loadChildren: () => import('./list/profilelist.module').then(m => m.ProfileListModule) },
        { path: 'listFacture', data: {breadcrumb: 'List Facture'}, loadChildren: () => import('./facture-list/facture-list.module').then(m => m.FactureListModule) },
        { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./create/profilecreate.module').then(m => m.ProfileCreateModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
