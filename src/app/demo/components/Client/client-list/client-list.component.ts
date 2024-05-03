import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Role } from 'src/app/demo/api/Role';
import { Customer } from 'src/app/demo/api/customer';
import { User1 } from 'src/app/demo/api/user1';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-client-list',

  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {
    
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
    
    
    
      this.customerService.getClient().then(client=>this.client=client);

  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  navigateToCreateClient(){
      this.router.navigate(['client/create'])
  }
  editWorker() {
    let email = this.user?.email || '';
    let numeroTel = this.user?.numeroTel || '';
    let addresse = this.user?.addresse || '';
    let tauxRemise = this.user?.remiseTVA || '';

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const addressInput = document.getElementById('userName') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const tauxRemiseInput = document.getElementById('tauxRemise') as HTMLInputElement;

    if (emailInput && emailInput.value.trim() !== '') {
        email = emailInput.value;
    }

    if (addressInput && addressInput.value.trim() !== '') {
        addresse = addressInput.value;
    }

    if (phoneInput && phoneInput.value.trim() !== '') {
        numeroTel = phoneInput.value;
    }

    if (tauxRemiseInput && tauxRemiseInput.value.trim() !== '') {
        tauxRemise = tauxRemiseInput.value;
    }

    const user = {
        email: email,
        password: numeroTel,
        numeroTel: numeroTel,
        addresse: addresse,
        remiseTVA: tauxRemise
    };

    console.log(user);

    const workerJson = JSON.stringify(user);

    this.confirmationService.confirm({
        key: 'confirm1',
        message: 'Are you sure to perform this action?',
        accept: () => {
            if (this.user != undefined) {
                this.customerService.editWorker(this.user.id, workerJson).then(res => {
                    console.log(res);
                    window.location.reload();
                });
            }
        }
    });
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

  getUser(user:User1){
      this.display=true;
      this.user=user
      console.log(this.user);

  }



}