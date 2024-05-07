import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureListRoutingModule } from './facture-list-routing.module';
import { FactureListComponent } from './facture-list.component';
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
import { MessagesDemoRoutingModule } from '../../components/uikit/messages/messagesdemo-routing.module';
import { OverlaysDemoRoutingModule } from '../../components/uikit/overlays/overlaysdemo-routing.module';



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
	providers: [ConfirmationService] 
})
export class FactureListModule { }
