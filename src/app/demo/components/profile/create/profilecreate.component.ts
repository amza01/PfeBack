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

    x:number=0;
      
    createWorker() {
        let user :any =null;
      
        const formData = new FormData();
        if(this.valRadio !='')
            {
                if(this.valRadio ==="Client")
                    { this.x=0;
                        const email = (document.getElementById('email') as HTMLInputElement).value;
                        const addresse = (document.getElementById('userName') as HTMLInputElement).value;
                        const numeroTel = (document.getElementById('phone') as HTMLInputElement).value;
                        const tauxRemise = (document.getElementById('tauxRemise') as HTMLInputElement).value;
                         user = {
             
                            email: email,
                          
                            numeroTel: numeroTel,
                           
                            addresse: addresse,
                            remiseTVA:tauxRemise
                   
                        };  
                    }
                    else{
                        this.x=1
                        const email = (document.getElementById('email') as HTMLInputElement).value;
                        const addresse = (document.getElementById('userName') as HTMLInputElement).value;
                        const numeroTel = (document.getElementById('phone') as HTMLInputElement).value;
                        const CIN = (document.getElementById('CIN') as HTMLInputElement).value;
                        const RIB = (document.getElementById('RIB') as HTMLInputElement).value;
                         user = {
             
                            email: email,
                           
                            numeroTel: numeroTel,
                           
                            addresse: addresse,
                            rib:CIN,
                            cin:RIB
                           
                        
                       
                    
                        }; 
                    }

                    console.log(user);
                    let workerJson = JSON.stringify(user);
                    this.confirmationService.confirm({
                        key: 'confirm1',
                        message: 'Are you sure to perform this action?',
                        accept: () => {
                            // If user accepts the confirmation, call postWorkersLarge
                            this.customerService.postUser(workerJson,this.x).subscribe(
                                (res: { status: number; message: any; }) => {
                                   console.log("jjjj");
                                        this.msgs = [{ severity: 'success', summary: 'success', detail: res.message }];
                                   window.location.reload();
                                     
                                },
                                       
                                
                // Handle HTTP errors
                (error: { status: number; }) => {
                    
                        this.msgs=[];
                        this.msgs = [{ severity: 'error', summary: 'error', detail: 'Something was wrong' }];
                   
                  
                }       
                            );
                            
                            
                            
                        
                        }
                    });

            }
            else{
                this.msgs = [];
                this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'Select Supplier or Client' });
            }
      
      }

     
  getUser(user:User1){

    console.log(user)
  }
    
  
      
}
