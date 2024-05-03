import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { MessagesModule } from "primeng/messages";
import { MultiSelectModule } from "primeng/multiselect";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { MessagesDemoRoutingModule } from "../../uikit/messages/messagesdemo-routing.module";
import { OverlaysDemoRoutingModule } from "../../uikit/overlays/overlaysdemo-routing.module";
import { FournisseurListRoutingModule } from "./fournisseur-list-routing.module";
import { FournisseurListComponent } from "./fournisseur-list.component";
import { ConfirmationService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ProgressBarModule } from "primeng/progressbar";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";




@NgModule({
 
	imports: [
		CommonModule,
		FournisseurListRoutingModule,
		RippleModule,
		ButtonModule,
		InputTextModule,
		TableModule,
		ProgressBarModule,ConfirmDialogModule,MessagesModule,
        MessagesDemoRoutingModule,
        MessagesModule,DialogModule ,  OverlaysDemoRoutingModule,
        OverlayPanelModule,MultiSelectModule, FormsModule,DropdownModule
	],
	declarations: [FournisseurListComponent],
	providers: [ConfirmationService] 
})
export class FournisseurListModule { }
