import { Component, OnInit } from '@angular/core';
import { Message, PrimeNGConfig, MessageService, ConfirmationService } from 'primeng/api';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-fournisseur-create',

  templateUrl: './fournisseur-create.component.html',
  styleUrl: './fournisseur-create.component.scss'
})
export class FournisseurCreateComponent implements OnInit {
  msgs: Message[] = [];
  constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig,private service :MessageService, private confirmationService :ConfirmationService){}

  ngOnInit() {
      this.primengConfig.ripple = true;
  } 
  createWorker() {
      let user :any =null;
    
                     const email = (document.getElementById('email') as HTMLInputElement)?.value;
                      const addresse = (document.getElementById('address') as HTMLInputElement)?.value;
                      const numeroTel = (document.getElementById('phone') as HTMLInputElement)?.value;
    
                      const rib = (document.getElementById('rib') as HTMLInputElement)?.value;
                      const cin = (document.getElementById('cin') as HTMLInputElement)?.value;
                       user = {
           
                          email: email,
                        
                          numeroTel: numeroTel,
                         
                          addresse: addresse,
                         
                          rib:rib,
                          cin:cin
                 
                      };  
                  
                if(user&&numeroTel&&addresse&&rib&&cin)
                  {
                    console.log(user);
                    let workerJson = JSON.stringify(user);
                    this.confirmationService.confirm({
                        key: 'confirm1',
                        message: 'Are you sure to perform this action?',
                        accept: () => {
                            // If user accepts the confirmation, call postWorkersLarge
                            this.customerService.postUser1(workerJson).subscribe(
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
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'veillez completez tous les champs'});                 }
                  
         
    
    }

   

  

    
}