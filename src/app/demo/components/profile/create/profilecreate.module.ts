import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProfileCreateComponent } from './profilecreate.component';
import { ProfileCreateRoutingModule } from './profilecreate-routing.module';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PasswordModule } from 'primeng/password';
import { MessagesDemoRoutingModule } from '../../uikit/messages/messagesdemo-routing.module';
import { MessageService, ConfirmationService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ProfileCreateRoutingModule,
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
	declarations: [ProfileCreateComponent],
	providers: [MessageService,ConfirmationService] // Add MessageService to providers array
})
export class ProfileCreateModule { }
