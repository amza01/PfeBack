import { Component, OnInit } from '@angular/core';
import { Message, PrimeNGConfig, MessageService, ConfirmationService } from 'primeng/api';
import { Role } from 'src/app/demo/api/Role';
import { User1 } from 'src/app/demo/api/user1';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-client-create',

  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.scss'
})
export class ClientCreateComponent implements OnInit {
  msgs: Message[] = [];
  constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig,private service :MessageService, private confirmationService :ConfirmationService){}

  ngOnInit() {
      this.primengConfig.ripple = true;
  } createWorker() {
      let user :any =null;
    
                     const email = (document.getElementById('email') as HTMLInputElement).value;
                      const addresse = (document.getElementById('userName') as HTMLInputElement).value;
                      const numeroTel = (document.getElementById('phone') as HTMLInputElement).value;
                      const tauxRemise = (document.getElementById('tauxRemise') as HTMLInputElement)?.value;
                       user = {
           
                          email: email,
                        
                          numeroTel: numeroTel,
                         
                          addresse: addresse,
                          remiseTVA:tauxRemise
                 
                      };  
                  
                if(user&&numeroTel&&addresse&&tauxRemise)
                  {
                    console.log(user);
                    let workerJson = JSON.stringify(user);
                    this.confirmationService.confirm({
                        key: 'confirm1',
                        message: 'Are you sure to perform this action?',
                        accept: () => {
                            // If user accepts the confirmation, call postWorkersLarge
                            this.customerService.postUser(workerJson).subscribe(
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

