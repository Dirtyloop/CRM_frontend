import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AdminCustomerComponent } from './modules/admin/admin-customer/admin-customer.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { AdminCustomerUpdateComponent } from './modules/admin/admin-customer-update/admin-customer-update.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'customers', component: CustomerComponent},
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path:'', component: AdminLayoutComponent, children: [
      {path: 'admin', component: AdminComponent},
      {path: 'admin/customers', component: AdminCustomerComponent},
      {path: 'admin/customers/update/:id', component: AdminCustomerUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
