import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateRoutingModule } from './client-create-routing.module';
import { ClientCreateComponent } from './client-create.component';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { MessagesDemoRoutingModule } from '../../uikit/messages/messagesdemo-routing.module';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ClientCreateRoutingModule,
		ButtonModule,
		RippleModule,
		InputTextModule,
		DropdownModule,
		FileUploadModule,
		InputTextareaModule,
		InputGroupModule,
		InputGroupAddonModule,
		MultiSelectModule,PasswordModule,	MessagesDemoRoutingModule,
		MessagesModule,
		MessageModule,OverlayPanelModule,ConfirmDialogModule, RadioButtonModule

	],
	declarations: [ClientCreateComponent],
	providers: [MessageService,ConfirmationService] // Add MessageService to providers array
})
export class ClientCreateModule { }
