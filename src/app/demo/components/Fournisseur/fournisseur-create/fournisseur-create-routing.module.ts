import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurCreateComponent } from './fournisseur-create.component';
import { RouterModule } from '@angular/router';



@NgModule({

	imports: [RouterModule.forChild([
		{ path: '', component: FournisseurCreateComponent }
	])],
	exports: [RouterModule]
})
export class FournisseurCreateRoutingModule { }
