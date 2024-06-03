import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: AdminListComponent }
	])],
	exports: [RouterModule]
})
export class AdminListRoutingModule { }
