import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
 
  imports: [RouterModule.forChild([
    { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./article-list/article-list.module').then(m => m.ArticleListModule) },
    { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./article-create/article-create.module').then(m => m.ArticleCreateModule) },
    { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]
})
export class ArticleRoutingModule { }
