import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { MessagesDemoRoutingModule } from '../../components/uikit/messages/messagesdemo-routing.module';
import { OverlaysDemoRoutingModule } from '../../components/uikit/overlays/overlaysdemo-routing.module';
import { BonDeReceptionComponent } from './bon-de-reception.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BonDeReceptionRoutingModule } from './bon-de-reception-routing.module';



@NgModule({
 
  imports: [
    CommonModule,
    RippleModule,
		ButtonModule,
		InputTextModule,
		TableModule,
		ProgressBarModule,ConfirmDialogModule,MessagesModule,
        BonDeReceptionRoutingModule,
        MessagesModule,DialogModule ,  OverlaysDemoRoutingModule,
        OverlayPanelModule,MultiSelectModule, FormsModule,DropdownModule
  ],
  declarations: [BonDeReceptionComponent],
	providers: [ConfirmationService,MessageService] 
})

export class BonDeReceptionModule { }
