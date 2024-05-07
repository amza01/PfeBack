import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Role } from 'src/app/demo/api/Role';
import { Customer } from 'src/app/demo/api/customer';
import { User1 } from 'src/app/demo/api/user1';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-fournisseur-list',

  templateUrl: './fournisseur-list.component.html',
  styleUrl: './fournisseur-list.component.scss'
})
export class FournisseurListComponent implements OnInit {
    
  //user :any;
  user1 :any;
   display: boolean = false;
  msgs: Message[] = [];
    supplier :any[]=[]

  constructor(private customerService: CustomerService, private router: Router,private confirmationService :ConfirmationService,private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.primengConfig.ripple = true;
    
      this.customerService.getSupplier().then(supplier=>
       this.supplier=supplier
      //console.log(supplier)
      );
   

  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  navigateToCreateFournisseur(){
      this.router.navigate(['fournisseur/create'])
  }
 
  editWorker1(){
    console.log(this.user1);
      let rib;
      let email;
      let numeroTel;
      let addresse;
      let cin;
      const emailInput = document.getElementById('email') as HTMLInputElement;
const addressInput = document.getElementById('userName') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const cinInput  = document.getElementById('CIN') as HTMLInputElement;
const ribInput  = document.getElementById('RIB') as HTMLInputElement;

// Vérifier si l'élément emailInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (emailInput && emailInput.value.trim() !== '') {
  // L'email n'est pas vide, faire quelque chose
  email = emailInput.value;
  // Faire quelque chose avec l'email
} else {
   email = this.user1?.email;
}

// Vérifier si l'élément addressInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (addressInput && addressInput.value.trim() !== '') {
  // L'adresse n'est pas vide, faire quelque chose
  addresse = addressInput.value;
  // Faire quelque chose avec l'adresse
} else {
  addresse = this.user1?.addresse;
}

// Vérifier si l'élément phoneInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (phoneInput && phoneInput.value.trim() !== '') {
  // Le numéro de téléphone n'est pas vide, faire quelque chose
   numeroTel = phoneInput.value;
 
} else {
  // Le numéro de téléphone est vide ou l'élément est nul, gérer le cas
   numeroTel = this.user1?.numeroTel;
}
if(ribInput&&ribInput.value.trim()!=='')
  {
      rib=ribInput.value;

  }else{
      rib=this.user1?.rib;
  }
  if(cinInput&&cinInput.value.trim()!=='')
      {
          cin=cinInput.value;
  
      }else{
          cin=this.user1?.cin;
      }
     

// Mettre à jour la valeur du champ "roles" dans le formulaire

      let user: any = {
           
          email: email,
         
          numeroTel: numeroTel,
         
          addresse: addresse,
        
          cin: cin,
          rib: rib
      
     
    // imageData:undefined
      };
    
  
      let workerJson = JSON.stringify(user);
    console.log(workerJson);
    
      this.confirmationService.confirm({
          key: 'confirm1',
          message: 'Are you sure to perform this action?',
          accept: () => {
              if(this.user1!=undefined)

      this.customerService.editWorker1(this.user1.id,workerJson ).then(res =>
         
         console.log(res)
         );
         window.location.reload();
  }

})
  
  
      
  }
 

  deleteWorker1(workerId:string){
     
      this.confirmationService.confirm({
          key: 'confirm1',
          message: 'Are you sure to perform this action?',
          accept: () => {

      this.customerService.deleteWorkerLarge1( workerId).then(res =>
         
         console.log(res)
         );
       window.location.reload();
        
  }
})
  }

  getUser1(user :any){
      this.display=true;
      this.user1=user
  }


}
