import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureCreateComponent } from './facture-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
 
	imports: [RouterModule.forChild([
		{ path: '', component: FactureCreateComponent }
	])],
	exports: [RouterModule]
})
export class FactureCreateRoutingModule { }
