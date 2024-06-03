import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Role } from 'src/app/demo/api/Role';
import { User1 } from 'src/app/demo/api/user1';
import { ArticleService } from 'src/app/demo/service/article.service';
import { BonDeCommandeServiceService } from 'src/app/demo/service/bon-de-commande-service.service';
import { DevisService } from 'src/app/components/apps/service/devis.service';

@Component({
    templateUrl: './profilecreate.component.html',
})
export class ProfileCreateComponent implements OnInit{
    selectedArticle: any;
  selectedQuantity: number=20;
  selectedArticles: { article: any, quantity: number }[] = [];
  
  addArticle() {
      if (this.selectedArticle && this.selectedQuantity > 0) {
          this.selectedArticles.push({ article: this.selectedArticle, quantity: this.selectedQuantity });
          console.log(this.selectedArticles)
          this.selectedArticle = null;
          this.selectedQuantity = 0;
      }
  }
  
  removeArticle(item: any) {
      const index = this.selectedArticles.indexOf(item);
      if (index !== -1) {
          this.selectedArticles.splice(index, 1);
      }
  }
    client:any=[]
    articles:any=[]
    devis: any = {
      code: '',
      client: '',
      description: '',
      prixNet: 0,
      prixHtNet:0,
     
      date: new Date().toLocaleString(),
      status: 'Pas encore',
      article:'',
      articlesQuantites: this.selectedArticles
    };
    msgs: Message[] = [];
  
    constructor(private bonDeCommandeService: BonDeCommandeServiceService, private clientService:CustomerService,private articleService:ArticleService,private devisService:DevisService){}
    ngOnInit(): void {
   
    this.clientService.getClient().then(client=>
      this.client=client
     //console.log(supplier)
     );
     this.articleService.getAllArticles().subscribe(article=>
      this.articles=article
     //console.log(supplier)
     );
    }
  
    createDevis() {
      const devisJson= JSON.stringify(this.devis);
  
      console.log(this.devis);
     this.devisService.createdevis(devisJson).subscribe(
        (res) => {

     this.msgs = [{ severity: 'success', summary: 'Success', detail: 'Devis créé avec succès' }];
      
          this.devis = {
            code: '',
            client: '',
            description: '',
            prixNet: 0,
            prixHtNet:0,
           
            date: new Date().toLocaleString(),
            status: 'Pas encore',
            article:'',
            articlesQuantites: this.selectedArticles
          };
        },
    
        (error) => {
          this.msgs = [{ severity: 'error', summary: 'Erreur', detail:error.error  }];
          console.error('Erreur lors de la création du bon de commande:', error);
        }
      );
    }
  }