import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'customers', component: CustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
