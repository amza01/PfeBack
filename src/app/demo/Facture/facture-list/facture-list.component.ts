import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BonDeCommandeServiceService } from '../../service/bon-de-commande-service.service';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-list',

  templateUrl: './facture-list.component.html',
  styleUrl: './facture-list.component.scss',
  providers: [ConfirmationService, MessageService]
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
    private router :Router
  ) {}

  ngOnInit(): void {
    this.loadBonsDeCommande();
  }

  loadBonsDeCommande() {
    this.bonDeCommandeService.getBonsDeCommande().subscribe(
      bonsDeCommande => {
        console.log(bonsDeCommande);
        this.bonsDeCommande = bonsDeCommande;
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

  print( code:string){
    this.confirmationService.confirm({
     key: 'confirm1',
        message: 'Are you sure to perform this action?',
      accept: () => { 
        this.bonDeCommandeService.generateReport(code).subscribe(
          (response) => {
            // Gérer la réponse ici
            console.log('Report generated:', response);
          },
          (error:Response) => {
          if(error.status==200)
            alert("télechargé")
          }
        );

console.log("hihi");

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