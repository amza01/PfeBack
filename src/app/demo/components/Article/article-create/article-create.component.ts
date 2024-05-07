import { Component } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';

import { ArticleService } from 'src/app/demo/service/article.service';

@Component({
  selector: 'app-article-create',
 
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss'
})
export class ArticleCreateComponent {
  msgs: Message[] = [];
  code!: string;
  libelle!: string;
  quantiteArticle!: number;
  prixUnitaire!:number;
  TVA!:number;
  constructor(private articleService: ArticleService,private confirmationService:ConfirmationService) { }

  createArticle() {
    if(this.code&&this.libelle&&this.quantiteArticle&&this.prixUnitaire&&this.TVA){
      const newArticle = {
        //  idArticle:0,
          code: this.code,
          libelle: this.libelle,
          quantiteArticle: this.quantiteArticle,
          prixUnitaire:this.prixUnitaire,
          tva:this.TVA
        };
    console.log(newArticle);
    let newArticleJson = JSON.stringify(newArticle);
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?',
      accept: () => {
             
        this.articleService.create(newArticleJson).subscribe(
          (response: any) => {
            this.msgs = [{ severity: 'success', summary: 'success', detail: response.message }];
            window.location.reload();
              
        }, (error: any) => {
          this.msgs=[];
                      this.msgs = [{ severity: 'error', summary: 'error', detail: 'Something was wrong' }];
                 
        });
      
      }
  });
       
    }
    else{
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Warn Message', detail:'veillez completez tous les champs'});             
        }
                
    
   
  }


}

