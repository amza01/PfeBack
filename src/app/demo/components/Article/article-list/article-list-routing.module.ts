import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: ArticleListComponent }
	])],
	exports: [RouterModule]
})
export class ArticleListRoutingModule { }
