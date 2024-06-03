import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ArticleListComponent } from '../../Article/article-list/article-list.component';
import { MessagesDemoRoutingModule } from '../../uikit/messages/messagesdemo-routing.module';
import { OverlaysDemoRoutingModule } from '../../uikit/overlays/overlaysdemo-routing.module';

@NgModule({
    imports: [
    CommonModule,
    DocumentationRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule,MessagesModule,
    MessagesDemoRoutingModule,
    MessagesModule,DialogModule ,  OverlaysDemoRoutingModule,
    OverlayPanelModule,MultiSelectModule, FormsModule,DropdownModule
],
declarations: [DocumentationComponent],
providers: [ConfirmationService] 
})
export class DocumentationModule { }
