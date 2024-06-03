import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileListComponent } from '../list/profilelist.component';
import { FactureListComponent } from './facture-list.component';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: FactureListComponent }
	])],
	exports: [RouterModule]
})
export class FactureListRoutingModule { }
