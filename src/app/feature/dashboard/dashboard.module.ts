import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './views/dashboard-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopulationChartComponent } from './components/population-chart/population-chart.component';
import { VehicleOwnershipChartComponent } from './components/vehicle-ownership-chart/vehicle-ownership-chart.component';

@NgModule({
  declarations: [
    PopulationChartComponent,
    VehicleOwnershipChartComponent,
    DashboardViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule {}
