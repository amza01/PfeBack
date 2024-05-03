import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateComponent } from './client-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
 
	imports: [RouterModule.forChild([
		{ path: '', component: ClientCreateComponent }
	])],
	exports: [RouterModule]
})
export class ClientCreateRoutingModule { }
