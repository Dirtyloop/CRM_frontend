import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminCustomerComponent } from 'src/app/modules/admin/admin-customer/admin-customer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminCustomerUpdateComponent } from 'src/app/modules/admin/admin-customer-update/admin-customer-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdminCustomerComponent,
    AdminLayoutComponent,
    AdminCustomerUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminLayoutModule { }
