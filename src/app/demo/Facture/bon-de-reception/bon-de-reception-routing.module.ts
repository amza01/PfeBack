import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FactureListComponent } from '../facture-list/facture-list.component';
import { BonDeReceptionComponent } from './bon-de-reception.component';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: BonDeReceptionComponent }
	])],
	exports: [RouterModule]
})
export class BonDeReceptionRoutingModule { }
