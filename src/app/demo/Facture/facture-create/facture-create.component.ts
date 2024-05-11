import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BonDeCommandeServiceService } from '../../service/bon-de-commande-service.service';
import { CustomerService } from '../../service/customer.service';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-facture-create',

  templateUrl: './facture-create.component.html',
  styleUrl: './facture-create.component.scss'
})
export class FactureCreateComponent implements OnInit{
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
  fournisseurs:any=[]
  articles:any=[]
  bonDeCommande: any = {
    code: '',
    fournisseur: '',
    description: '',
    prixTotal: 0,
    date: new Date().toLocaleString(),
    status: 'Pas encore',
    article:'',
    articlesQuantites: this.selectedArticles
  };
  msgs: Message[] = [];

  constructor(private bonDeCommandeService: BonDeCommandeServiceService, private fournisseurService:CustomerService,private articleService:ArticleService){}
  ngOnInit(): void {
 
  this.fournisseurService.getSupplier().then(supplier=>
    this.fournisseurs=supplier
   //console.log(supplier)
   );
   this.articleService.getAllArticles().subscribe(article=>
    this.articles=article
   //console.log(supplier)
   );
  }

  createBonDeCommande() {
    const bonDeCommandeJson= JSON.stringify(this.bonDeCommande);

    console.log(this.bonDeCommande);
    this.bonDeCommandeService.createBonDeCommande(bonDeCommandeJson).subscribe(
      () => {
        this.msgs = [{ severity: 'success', summary: 'Success', detail: 'Bon de commande créé avec succès' }];
        window.location.reload();
        // Réinitialiser l'objet bonDeCommande après la création
        this.bonDeCommande = {
          code: '',
          fournisseur: '',
          description: '',
          prixTotal: 0,
          date: new Date().toLocaleString(),
          status: '',
          articlesQuantites: this.selectedArticles
        };
      },
  
      (error) => {
        this.msgs = [{ severity: 'error', summary: 'Erreur', detail: 'Échec de la création du bon de commande' }];
        console.error('Erreur lors de la création du bon de commande:', error);
      }
    );
  }
}
