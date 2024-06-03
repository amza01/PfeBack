import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Role } from 'src/app/demo/api/Role';
import { Customer } from 'src/app/demo/api/customer';
import { User1 } from 'src/app/demo/api/user1';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-admin-list',

  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.scss'
})
export class AdminListComponent implements OnInit {
    
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
    this.customerService.getAdmin().then(client=>this.client=client);

  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  
 
  deleteWorker(workerId:string){
     
      this.confirmationService.confirm({
          key: 'confirm1',
          message: 'Are you sure to perform this action?',
          accept: () => {

      this.customerService.DeleteAdmin( workerId).then(res =>
         
         console.log(res)
         );
        window.location.reload();
         


  }

})
  }

  updateStatus(user:User1){
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?',
      accept: () => {
      this.customerService.updateStatus(user.id).then(res=>{
        console.log(res);
        
        this.customerService.getAdmin().then(client=>this.client=client);}
      );
    }
  })
  }



}