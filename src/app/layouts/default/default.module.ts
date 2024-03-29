import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from 'src/app/modules/customer/customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { CustomerDetailsComponent } from 'src/app/modules/customer-details/customer-details.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
