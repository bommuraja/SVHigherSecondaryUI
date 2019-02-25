import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { OperatorAddComponent } from './operator/operator-add/operator-add.component';
import { OperatorEditComponent } from './operator/operator-edit/operator-edit.component';
import { OperatorDeleteComponent } from './operator/operator-delete/operator-delete.component';
import { OperatorViewComponent } from './operator/operator-view/operator-view.component';
import { OperatorListComponent } from './operator/operator-list/operator-list.component';

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


