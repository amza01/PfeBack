import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BonDeCommandeServiceService } from 'src/app/demo/service/bon-de-commande-service.service';
import 'jspdf-autotable';

@Component({
  selector: 'app-bon-de-reception',

  templateUrl: './bon-de-reception.component.html',
  styleUrl: './bon-de-reception.component.scss'
})

export class BonDeReceptionComponent implements OnInit {
  
  bonsDeCommande: any[] = [];
  bonDeCommande: any = {
    code: '',
    fournisseur: '',
    description: '',
    prixTotal: 0,
    date: new Date(),
    status: ''
  };
  display: boolean = false;
  msgs: any[] = [];

  constructor(
    private bonDeCommandeService: BonDeCommandeServiceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router :Router
  ) {}

  ngOnInit(): void {
    this.loadBonsDeCommande();
  }
  loadBonsDeCommande() {
    this.bonDeCommandeService.getBonsDeCommande().subscribe(
      bonsDeCommande => {
        // Filter the bonsDeCommande to exclude those with status "Pas encore"
        const filteredBonsDeCommande = bonsDeCommande.filter(bon => bon.status !== 'Pas encore');
        console.log(filteredBonsDeCommande);
        this.bonsDeCommande = filteredBonsDeCommande;
      },
      error => {
        console.error('Erreur lors du chargement des bons de commande:', error);
      }
    );
  }
  

  navigateToCreateBonDeCommande() {
this.router.navigate(['facture/create'])
  }
  createBonDeCommande() {
    this.bonDeCommandeService.createBonDeCommande(this.bonDeCommande).subscribe(
      () => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Bon de commande créé avec succès'});
        this.loadBonsDeCommande(); // Recharger la liste des bons de commande après la création
        this.display = false; // Fermer le dialogue de création
      },
      error => {
        console.error('Erreur lors de la création du bon de commande:', error);
        this.messageService.add({severity:'error', summary:'Erreur', detail:'Échec de la création du bon de commande'});
      }
    );
  }

  updateBonDeCommande(bonDeCommande:any) {
    // Implémentez la mise à jour du bon de commande ici
  }

  print( data:any){
    this.confirmationService.confirm({
     key: 'confirm1',
        message: 'Are you sure to perform this action?',
      accept: () => { 
        const doc = new jsPDF();

// Add title
doc.setFontSize(18);
doc.text('Bon de reception', 67, 22);

// Add total price
doc.setFontSize(10); // Adjust font size for other text

const pageWidth1 = doc.internal.pageSize.getWidth();
const dateText = `Date: ${data.date}`;
const dateTextWidth = doc.getTextWidth(dateText);
doc.text(dateText, pageWidth1 - dateTextWidth - 14, 14);

// Add description
doc.text(`Description: ${data.description}`, 14, 52);

// Add fournisseur details
const fournisseur = data.fournisseur;
doc.text('Fournisseur:', 14, 62);
doc.text(`Email: ${fournisseur.email}`, 14, 72);
doc.text(`Telephone: ${fournisseur.numeroTel}`, 14, 82);
doc.text(`Adresse: ${fournisseur.addresse}`, 14, 92);
doc.text(`RIB: ${fournisseur.rib}`, 14, 102);

// Convert articlesQuantites to an array
const articlesQuantitesArray: ArticleQuantite[] = Object.entries(data.articlesQuantites).map(([articleStr, quantity]) => {
    // Parse articleStr to extract the article object
    const articleMatch = articleStr.match(/Article\(idArticle=(\d+), code=(.+?), libelle=(.+?), quantiteArticle=(\d+), prixUnitaire=(.+?), tva=(.+?), etat=(.+?)\)/);
    if (!articleMatch) {
        console.error("Failed to parse article string:", articleStr);
        return null;
    }
    const [_, idArticle, code, libelle, quantiteArticle, prixUnitaire, tva, etat] = articleMatch;
    const article: Article = {
        idArticle: Number(idArticle),
        code,
        libelle,
        quantiteArticle: Number(quantiteArticle),
        prixUnitaire: Number(prixUnitaire),
        tva: Number(tva),
        etat,
    };
    return {
        article,
        quantite: Number(quantity),
    };
}).filter((item): item is ArticleQuantite => item !== null);

// Define columns
const columns = [

    { header: 'Code', dataKey: 'article.code' },
    { header: 'Libelle', dataKey: 'article.libelle' },
    { header: 'Quantite Achete', dataKey: 'quantite' },
    { header: 'Prix Unitaire', dataKey: 'article.prixUnitaire' },
];

// Create the table
doc.autoTable({
    head: [columns.map(col => col.header)],
    body: articlesQuantitesArray.map(row => columns.map(col => {
        const keys = col.dataKey.split('.');
        let value: any = row;
        for (const key of keys) {
            value = value[key];
        }
        return value;
    })),
    startY: 112,
});
// Get the final Y position after the table
const finalY = (doc as any).autoTable.previous.finalY;

// Add total price below the table and centered
const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
const totalText = `Prix Total (en DT): ${data.prixTotal}`;
const textWidth = doc.getTextWidth(totalText);
const centerX = (pageWidth - textWidth) / 2;
doc.text(totalText, centerX, finalY + 20);
// Save the PDF
doc.save('bon_de_reception.pdf');
      }});
    }
check(bonDeCommande:any){
  this.confirmationService.confirm({
    key: 'confirm1',
       message: 'Are you sure to perform this action?',
     accept: () => { 
      this.bonDeCommandeService.updateStatus(bonDeCommande.id)
      .subscribe(() => {
 this.loadBonsDeCommande();
      }, error => {
       
      });
console.log("hihi");

     }});

}




  deleteBonDeCommande(id: number) {

    this.confirmationService.confirm({
     key: 'confirm1',
        message: 'Are you sure to perform this action?',
      accept: () => {
        this.bonDeCommandeService.deleteBonDeCommande(id).subscribe(
          () => {
            this.messageService.add({severity:'success', summary:'Success', detail:'Bon de commande supprimé avec succès'});
            this.loadBonsDeCommande(); // Recharger la liste des bons de commande après la suppression
          },
          error => {
            console.error('Erreur lors de la suppression du bon de commande:', error);
            this.messageService.add({severity:'error', summary:'Erreur', detail:'Échec de la suppression du bon de commande'});
          }
        );
      }
    });
  }
  editBonDeCommande(){}
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
}
}

interface Article {
  idArticle: number;
  code: string;
  libelle: string;
  quantiteArticle: number;
  prixUnitaire: number;
  tva: number;
  etat: string;
}

interface ArticleQuantite {
  article: Article;
  quantite: number;
}

interface Data {
  date: string;
  description: string;
  fournisseur: {
      id: number;
      email: string;
      numeroTel: string;
      addresse: string;
      rib: string;
  };
  articlesQuantites: { [key: string]: number };
  prixTotal: number;
}
