import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Role } from 'src/app/demo/api/Role';
import { User1 } from 'src/app/demo/api/user1';
@Component({
    templateUrl: './profilecreate.component.html',
})
export class ProfileCreateComponent implements OnInit {

    selectedCities: Role[] = [];
    cities: any[] | undefined;
    valRadio: string = '';
    countries: any[] = [];
    msgs: Message[] = [];
     pass  :string ="" ;
    constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig,private service :MessageService, private confirmationService :ConfirmationService){}

    ngOnInit() {
        this.primengConfig.ripple = true;
        
        this.cities = [
            { name: "CLIENT", code: "NY" },
            { name: "SUPLIER", code: "RM" },
           
          ];
            // Add more roles as needed
    
    }

  
      
}
