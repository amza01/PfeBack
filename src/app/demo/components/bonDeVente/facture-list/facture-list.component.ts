import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BonDeCommandeServiceService } from 'src/app/demo/service/bon-de-commande-service.service';
import { DevisService } from 'src/app/demo/service/devis.service';
import 'jspdf-autotable';
@Component({
  selector: 'app-facture-list',
 
  templateUrl: './facture-list.component.html',
  styleUrl: './facture-list.component.scss'
})
export class FactureListComponent implements OnInit {
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
    private router :Router,
    private devisService :DevisService
  ) {}

  ngOnInit(): void {
    this.loadBonsDeCommande();
  }

  loadBonsDeCommande() {
    this.devisService.getdevis().subscribe(
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

  print( data:DevisData){
    this.confirmationService.confirm({
     key: 'confirm1',
        message: 'Are you sure to perform this action?',
      accept: () => { 
        
        const doc = new jsPDF();

        // Add title
        doc.setFontSize(18);
        doc.text('Facture', 90, 22);
        doc.setFontSize(10); // Adjust font size for other text
        const pageWidth1 = doc.internal.pageSize.getWidth();
        const dateText = `Date: ${data.date}`;
        const dateTextWidth = doc.getTextWidth(dateText);
        doc.text(dateText, pageWidth1 - dateTextWidth - 14, 14);
                   
        doc.text(`Description: ${data.description}`, 14, 42);
        
        // Add client details
        const client : Client= data.client;
        doc.text('Client:', 14, 52);
        doc.text(`Email: ${client.email}`, 14, 62);
        doc.text(`Telephone: ${client.numeroTel}`, 14, 72);
        doc.text(`Adresse: ${client.addresse}`, 14, 82);
        doc.text(`Remise TVA: ${client.remiseTVA}`, 14, 92);
        
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

// Add total prices in a table format below the articles table
const totals = [
  { label: 'Prix Net', value: data.prixNet },
  { label: 'Prix Remise', value: data.prixRemise },
  { label: 'Prix Net avec Remise', value: data.prixNetAvecRemise },
  { label: 'Prix Taxe', value: data.prixTaxe },
  { label: 'Prix Net avec Taxe', value: data.prixNetavecTaxe },
  { label: 'Prix Final', value: data.prixFinal },
];

// Define totals columns
const totalColumns: { header: string, dataKey: keyof typeof totals[0] }[] = [
  { header: 'Label', dataKey: 'label' },
  { header: 'Value (en DT)', dataKey: 'value' },
];

// Calculate the total table width
const tableWidth = 80; // Estimated width for two columns: Label and Value (adjust if necessary)
const pageWidth = doc.internal.pageSize.getWidth();
const marginLeft = (pageWidth - tableWidth) / 2 -10; // Center the table

// Create the totals table
doc.autoTable({
  head: [totalColumns.map(col => col.header)],
  body: totals.map(row => totalColumns.map(col => row[col.dataKey])),
  startY: finalY + 20,
  margin: { left: marginLeft },
  styles: { fontSize: 10 }, // Set font size to 10
  theme: 'plain', // No color
});


        // Save the PDF
        doc.save('Facture.pdf');

      }});
    }
check(bonDeCommande:any){
  this.confirmationService.confirm({
    key: 'confirm1',
       message: 'Are you sure to perform this action?',
     accept: () => { 
      this.devisService.updateStatus(bonDeCommande.id)
      .subscribe(() => {
    //    window.location.reload();
      }, error => {
       
      });
      window.location.reload()

     }});

}




  deleteBonDeCommande(id: number) {

    this.confirmationService.confirm({
     key: 'confirm1',
        message: 'Are you sure to perform this action?',
      accept: () => {
        this.devisService.deletedevis(id).subscribe(
          () => {

         
            this.messageService.add({severity:'success', summary:'Success', detail:'Bon de commande supprimé avec succès'});
            
          },
          error => {
            console.error('Erreur lors de la suppression du bon de commande:', error);
            this.messageService.add({severity:'error', summary:'Erreur', detail:'Échec de la suppression du bon de commande'});
          }
        );
        window.location.reload()
      }
   
    });

  }
  editBonDeCommande(){}
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
}
}
interface Client {
  id: number;
  email: string;
  numeroTel: string;
  addresse: string;
  remiseTVA: number;
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

interface DevisData {
  code: string;
  date: string;
  description: string;
  client: Client;
  id: number;
  prixFinal: number;
  prixHtSansRemiseNet: number;
  prixNet: number;
  prixNetAvecRemise: number;
  prixNetavecTaxe: number;
  prixRemise: number;
  prixTaxe: number;
  status: string;
  articlesQuantites: { [key: string]: number };
}