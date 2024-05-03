import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: ClientListComponent }
	])],
	exports: [RouterModule]
})
export class ClientListRoutingModule { }
