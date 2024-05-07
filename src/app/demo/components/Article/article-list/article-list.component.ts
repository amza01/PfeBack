import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Role } from 'src/app/demo/api/Role';
import { Customer } from 'src/app/demo/api/customer';
import { User1 } from 'src/app/demo/api/user1';
import { ArticleService } from 'src/app/demo/service/article.service';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-article-list',
  providers: [ConfirmationService, MessageService] ,
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent implements OnInit {
    
  article :any;
 // user1 :any;
  //selectedCities: Role[] = [];
 // cities: any[] | undefined;
  display: boolean = false;
  display1: boolean = false;
  msgs: Message[] = [];
  articles: any[] = [];
 // client :any[]=[]
 // supplier :any[]=[]

  constructor(private articleService: ArticleService, private router: Router,private confirmationService :ConfirmationService,private primengConfig: PrimeNGConfig) { }


  ngOnInit() {
      this.primengConfig.ripple = true;
   // this.customerService.getClient().then(client=>this.client=client);
   this.articleService.getAllArticles().subscribe(resp=>this.articles=resp)
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  navigateToCreateArticle(){
      this.router.navigate(['article/create'])
  }
  editArticle() {
    let code = this.article?.code || '';
    let libelle = this.article?.libelle || '';
    let quantiteArticle = this.article?.quantiteArticle || 0;
    let prixUnitaire = this.article?.prixUnitaire || 0;
    let TVA = this.article?.tva || 0;
  

    const codeInput = document.getElementById('code') as HTMLInputElement;
    const libelleInput = document.getElementById('libelle') as HTMLInputElement;
    const quantiteArticleInput = document.getElementById('quantiteArticle') as HTMLInputElement;
    const prixUnitaireInput = document.getElementById('prixUnitaire') as HTMLInputElement;
    const TVAInput = document.getElementById('TVA') as HTMLInputElement;
    if (TVAInput && TVAInput.value.trim() !== '') {
      TVA = TVAInput.value;
    }
    if (prixUnitaireInput && prixUnitaireInput.value.trim() !== '') {
      prixUnitaire = prixUnitaireInput.value;
    }
    if (codeInput && codeInput.value.trim() !== '') {
      code = codeInput.value;
    }

    if (libelleInput && libelleInput.value.trim() !== '') {
      libelle = libelleInput.value;
    }

    if (quantiteArticleInput && quantiteArticleInput.value.trim() !== '') {
      quantiteArticle = quantiteArticleInput.value;
    }



    const article = {
      
      code: code,
      libelle: libelle,
      quantiteArticle: quantiteArticle,
       prixUnitaire:prixUnitaire,
       tva:TVA
    };

    console.log(article);

    const articleJson = JSON.stringify(article);

    this.confirmationService.confirm({
        key: 'confirm1',
        message: 'Are you sure to perform this action?',
        accept: () => {
            if (this.article != undefined) {
                this.articleService.updateArticle(articleJson,this.article?.idArticle).subscribe(res => {
                    console.log(res);
                    window.location.reload();
                });
            }
        }
    });
}

 
  deleteWorker(articleId:number){
     
      this.confirmationService.confirm({
          key: 'confirm1',
          message: 'Are you sure to perform this action?',
          accept: () => {

      this.articleService.deleteArticle(articleId).subscribe(res =>
         
         console.log(res)
         );
        window.location.reload();
         


  }

})
  }

  getArticle(article:User1){
      this.display=true;
      this.article=article
     // console.log(this.user);

  }



}