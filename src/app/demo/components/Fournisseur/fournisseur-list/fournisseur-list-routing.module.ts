import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurCreateComponent } from '../fournisseur-create/fournisseur-create.component';
import { FournisseurListComponent } from './fournisseur-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: FournisseurListComponent }
	])],
	exports: [RouterModule]
})
export class FournisseurListRoutingModule { }
