import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '', 
  component: PagesComponent,
  children:[
    { path:'',redirectTo:'customer-list',pathMatch:'prefix'},
    { path:'customer-list',loadChildren:'./customer/customer-list/customer-list.module#CustomerListModule'},
    { path:'customer-add',loadChildren:'./customer/customer-add/customer-add.module#CustomerAddModule'},
    { path:'customer-edit/:id',loadChildren:'./customer/customer-edit/customer-edit.module#CustomerEditModule'},
    { path:'customer-view/:id',loadChildren:'./customer/customer-view/customer-view.module#CustomerViewModule'},
    { path:'customer-delete/:id',loadChildren:'./customer/customer-delete/customer-delete.module#CustomerDeleteModule'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
