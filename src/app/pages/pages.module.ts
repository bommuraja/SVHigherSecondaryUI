import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { OperatorAddComponent } from './operators/operator-add/operator-add.component';
import { OperatorEditComponent } from './operators/operator-edit/operator-edit.component';
import { OperatorDeleteComponent } from './operators/operator-delete/operator-delete.component';
import { OperatorViewComponent } from './operators/operator-view/operator-view.component';
import { OperatorListComponent } from './operators/operator-list/operator-list.component';

@NgModule({
  declarations: [PagesComponent, SidebarComponent, HeaderComponent, OperatorAddComponent, OperatorEditComponent, OperatorDeleteComponent, OperatorViewComponent, OperatorListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ]
})
export class PagesModule { }


