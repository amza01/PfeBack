import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Role } from 'src/app/demo/api/Role';
import { Customer } from 'src/app/demo/api/customer';
import { User } from 'src/app/demo/api/user';
import { User1 } from 'src/app/demo/api/user1';
import { CustomerService } from 'src/app/demo/service/customer.service';


@Component({
    templateUrl: './profilelist.component.html'
})
export class ProfileListComponent implements OnInit {
    
    user :any;
    user1 :any;
    selectedCities: Role[] = [];
    cities: any[] | undefined;
    display: boolean = false;
    display1: boolean = false;
    msgs: Message[] = [];
    customers: Customer[] = [];
    client :any[]=[]
    supplier :any[]=[]

    constructor(private customerService: CustomerService, private router: Router,private confirmationService :ConfirmationService,private primengConfig: PrimeNGConfig) { }


    ngOnInit() {
        this.primengConfig.ripple = true;
        this.cities = [
            { name: "CLIENT", code: "NY" },
            { name: "SUPLIER", code: "RM" },
           
          ];
        this.customerService.getCustomersLarge().then(customers => this.customers = customers);
        this.customerService.getSupplier().then(supplier=>this.supplier=supplier);
        this.customerService.getClient().then(client=>this.client=client);

    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }

    navigateToCreateUser(){
        this.router.navigate(['profile/create'])
    }
    editWorker(){
        let tauxRemise;
        let email;
        let numeroTel;
        let addresse;
        const emailInput = document.getElementById('email') as HTMLInputElement;
const addressInput = document.getElementById('userName') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const tauxRemiseInput = document.getElementById('tauxRemise') as HTMLInputElement;


// Vérifier si l'élément emailInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (emailInput && emailInput.value.trim() !== '') {
    // L'email n'est pas vide, faire quelque chose
    email = emailInput.value;
    // Faire quelque chose avec l'email
} else {
     email = this.user?.email;
}

// Vérifier si l'élément addressInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (addressInput && addressInput.value.trim() !== '') {
    // L'adresse n'est pas vide, faire quelque chose
    addresse = addressInput.value;
    // Faire quelque chose avec l'adresse
} else {
    addresse = this.user?.addresse;
}

// Vérifier si l'élément phoneInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (phoneInput && phoneInput.value.trim() !== '') {
    // Le numéro de téléphone n'est pas vide, faire quelque chose
    const numeroTel = phoneInput.value;
   
} else {
    // Le numéro de téléphone est vide ou l'élément est nul, gérer le cas
    const numeroTel = this.user?.numeroTel;
}
if(tauxRemiseInput && tauxRemiseInput!=null)
    {
         tauxRemise=  tauxRemiseInput.value;

    }else{
        tauxRemise=this.user?.remiseTVA;
    }

       
  
  // Mettre à jour la valeur du champ "roles" dans le formulaire

        let user: any = {
             
            email: email,
            password:numeroTel,
            numeroTel: numeroTel,
           
            addresse: addresse,
          
            remiseTVA: tauxRemise
        
       
      // imageData:undefined
        };
      
        console.log(user);
        let workerJson = JSON.stringify(user);
    
      
        this.confirmationService.confirm({
            key: 'confirm1',
            message: 'Are you sure to perform this action?',
            accept: () => {
                if(this.user!=undefined)

        this.customerService.editWorker(this.user.id,workerJson ).then(res =>
           
           console.log(res)
           );
           window.location.reload();
          


    }

})

 
    }
    editWorker1(){
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
     email = this.user?.email;
}

// Vérifier si l'élément addressInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (addressInput && addressInput.value.trim() !== '') {
    // L'adresse n'est pas vide, faire quelque chose
    addresse = addressInput.value;
    // Faire quelque chose avec l'adresse
} else {
    addresse = this.user?.addresse;
}

// Vérifier si l'élément phoneInput n'est pas nul et que sa valeur n'est pas une chaîne vide
if (phoneInput && phoneInput.value.trim() !== '') {
    // Le numéro de téléphone n'est pas vide, faire quelque chose
     numeroTel = phoneInput.value;
   
} else {
    // Le numéro de téléphone est vide ou l'élément est nul, gérer le cas
     numeroTel = this.user?.numeroTel;
}
if(ribInput)
    {
        rib=ribInput.value;

    }else{
        rib=this.user?.rib;
    }
    if(cinInput)
        {
            cin=cinInput.value;
    
        }else{
            cin=this.user?.cin;
        }
       
  
  // Mettre à jour la valeur du champ "roles" dans le formulaire

        let user: any = {
             
            email: email,
            password:numeroTel,
            numeroTel: numeroTel,
           
            addresse: addresse,
          
            cin: cin,
            rib: rib
        
       
      // imageData:undefined
        };
      
        console.log(user);
        let workerJson = JSON.stringify(user);
    
      
        this.confirmationService.confirm({
            key: 'confirm1',
            message: 'Are you sure to perform this action?',
            accept: () => {
                if(this.user!=undefined)

        this.customerService.editWorker1(this.user.id,workerJson ).then(res =>
           
           console.log(res)
           );
           window.location.reload();
          


    }

})

 
    }
    deleteWorker(workerId:string){
       
        this.confirmationService.confirm({
            key: 'confirm1',
            message: 'Are you sure to perform this action?',
            accept: () => {

        this.customerService.deleteWorkerLarge( workerId).then(res =>
           
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
    getUser(user:User1){
        this.display=true;
        this.user=user
        console.log(this.user);

    }
    getUser1(user :any){
        this.display1=true;
        this.user1=user
    }
  
  
}