import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create.component';



@NgModule({

	imports: [RouterModule.forChild([
		{ path: '', component: ArticleCreateComponent }
	])],
	exports: [RouterModule]
})
export class ArticleCreateRoutingModule { }
