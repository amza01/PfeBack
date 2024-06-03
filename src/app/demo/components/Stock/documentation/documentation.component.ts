import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { User1 } from 'src/app/demo/api/user1';
import { ArticleService } from 'src/app/demo/service/article.service';

@Component({
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
    quantity:any
    article :any;
  
    display: boolean = false;
    display1: boolean = false;
    msgs: Message[] = [];
    articles: any[] = [];
  
  
    constructor(private articleService: ArticleService, private router: Router,private confirmationService :ConfirmationService,private primengConfig: PrimeNGConfig) { }
  
  
    ngOnInit() {
        this.primengConfig.ripple = true;
     // this.customerService.getClient().then(client=>this.client=client);
     this.articleService.getAllArticles().subscribe(resp=>this.articles=resp)
    }
  
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }
 
  
   
    updateQuantity(article:any){
        this.confirmationService.confirm({
            key: 'confirm1',
            message: 'Are you sure to perform this action?',
            accept: () => {
this.articleService.updateQuantity(article.idArticle,this.quantity).subscribe(res=>{
    console.log(res);
    this.articleService.getAllArticles().subscribe(resp=>this.articles=resp)
})
            }})

}
    }
  
  
  