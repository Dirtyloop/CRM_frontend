import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminCustomerComponent } from 'src/app/modules/admin/admin-customer/admin-customer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminCustomerUpdateComponent } from 'src/app/modules/admin/admin-customer-update/admin-customer-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminCustomerAddComponent } from 'src/app/modules/admin/admin-customer-add/admin-customer-add.component';
import { AdminCustomerFormComponent } from 'src/app/modules/admin/admin-customer-form/admin-customer-form.component';
import { AdminMessageComponent } from 'src/app/modules/admin/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminAcunitFormComponent } from 'src/app/modules/admin/admin-acunit-form/admin-acunit-form.component';
import { AdminAcunitAddComponent } from 'src/app/modules/admin/admin-acunit-add/admin-acunit-add.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminCustomerComponent,
    AdminLayoutComponent,
    AdminCustomerUpdateComponent,
    AdminCustomerAddComponent,
    AdminCustomerFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminAcunitFormComponent,
    AdminAcunitAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminLayoutModule { }
