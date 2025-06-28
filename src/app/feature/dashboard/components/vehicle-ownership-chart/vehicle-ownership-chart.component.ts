import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DatausaService } from '../../services/datausa.service';
import { VehicleOwnershipResponse, VehicleOwnershipData } from '../../models/vehicle-ownership.model';
import { ErrorModalService } from 'src/app/shared/services/error-modal-service.service';

@Component({
  selector: 'app-vehicle-ownership-chart',
  templateUrl: './vehicle-ownership-chart.component.html',
  styleUrls: ['./vehicle-ownership-chart.component.scss']
})
export class VehicleOwnershipChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('vehicleChart', { static: false }) vehicleChartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | null = null;
  error: string | null = null;
  chartLabels: string[] = [];
  chartData: number[] = [];
  private dataReady = false;
  private viewReady = false;

  constructor(private datausa: DatausaService, private errorModalService: ErrorModalService) {}

  ngOnInit() {
    this.datausa.getVehicleOwnershipData().subscribe({
      next: (res: VehicleOwnershipResponse) => {
        const filtered = res.data.filter((row: VehicleOwnershipData) => Number(row.Year) === 2021);
        this.chartLabels = filtered.map((row: VehicleOwnershipData) => row['Vehicles Available']);
        this.chartData = filtered.map((row: VehicleOwnershipData) => row['Commute Means by Gender']);
        this.dataReady = true;
        this.tryRenderChart();
      },
      error: (err) => {
        console.error('Error loading vehicle data:', err);
        this.errorModalService.show();
        this.error = 'Error loading vehicle data';
      }
    });
  }

  ngAfterViewInit() {
    this.viewReady = true;
    this.tryRenderChart();
  }

  private tryRenderChart() {
    if (this.dataReady && this.viewReady) {
      this.renderChart();
    }
  }

  renderChart() {
    if (!this.vehicleChartRef) return;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.vehicleChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: this.chartLabels,
        datasets: [{
          data: this.chartData,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
