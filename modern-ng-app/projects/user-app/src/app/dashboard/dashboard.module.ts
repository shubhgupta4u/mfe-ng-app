import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGaurdService } from '../../../../auth-lib/src/lib/shared/auth-gaurd.service';
import { HttpClientService } from '../../../../util-lib/src/lib/shared/http-client.service';
import { ChartsModule } from '../../../../ui-element-lib/src/lib/shared/charts/charts.module';
import { EditorsModule } from '../../../../ui-element-lib/src/lib/shared/editors/editors.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    EditorsModule
  ],
  providers:[AuthGaurdService, HttpClientService]
})
export class DashboardModule { }
