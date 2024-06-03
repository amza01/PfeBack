import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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
import { MessagesDemoRoutingModule } from '../../uikit/messages/messagesdemo-routing.module';
import { OverlaysDemoRoutingModule } from '../../uikit/overlays/overlaysdemo-routing.module';
import { ProfileListRoutingModule } from '../list/profilelist-routing.module';
import { ProfileListComponent } from '../list/profilelist.component';
import { FactureListRoutingModule } from './facture-list-routing.module';
import { FactureListComponent } from './facture-list.component';



@NgModule({
  
	imports: [
		CommonModule,
		FactureListRoutingModule,
		RippleModule,
		ButtonModule,
		InputTextModule,
		TableModule,
		ProgressBarModule,ConfirmDialogModule,MessagesModule,
        MessagesDemoRoutingModule,
        MessagesModule,DialogModule ,  OverlaysDemoRoutingModule,
        OverlayPanelModule,MultiSelectModule, FormsModule,DropdownModule
	],
	declarations: [FactureListComponent],
	providers: [ConfirmationService,MessageService] 
})
export class FactureListModule { }
