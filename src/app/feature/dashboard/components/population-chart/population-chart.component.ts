import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";
import Chart from "chart.js/auto";
import { DatausaService } from "../../services/datausa.service";
import { PopulationResponse, PopulationData } from "../../models/population.model";

@Component({
  selector: "app-population-chart",
  templateUrl: "./population-chart.component.html",
  styleUrls: ["./population-chart.component.scss"],
})
export class PopulationChartComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild("populationChart", { static: false })
  populationChartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | null = null;
  error: string | null = null;
  chartLabels: string[] = [];
  chartData: any[] = [];
  private dataReady = false;
  private viewReady = false;

  constructor(private datausa: DatausaService) {}

  ngOnInit() {
    this.datausa.getPopulationData().subscribe({
      next: (res: PopulationResponse) => {
        const states = ["Alabama", "Florida", "California"];
        const filtered = res.data.filter((row: PopulationData) =>
          states.includes(row.State)
        );
        const yearsSet = new Set(filtered.map((row: PopulationData) => row.Year));
        const years = Array.from(yearsSet).sort();
        this.chartLabels = years as string[];
        this.chartData = states.map((state) => {
          const data = years.map((year) => {
            const found = filtered.find(
              (row: PopulationData) => row.State === state && String(row.Year) === year
            );
            return found ? found.Population : null;
          });
          return {
            label: state,
            data,
            fill: false,
            tension: 0.2,
            pointRadius: 3,
            pointHoverRadius: 5,
          };
        });
        this.dataReady = true;
        this.tryRenderChart();
      },
      error: (err) => {
        console.error("Error loading population data:", err);
        this.error = "Error loading population data";
      },
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
    if (!this.populationChartRef) return;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.populationChartRef.nativeElement, {
      type: "line",
      data: {
        labels: this.chartLabels,
        datasets: this.chartData,
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales: {
          y: {
            beginAtZero: false,
            title: { display: false, text: "Population" },
          },
          x: {
            title: { display: false, text: "Year" },
          },
        },
      },
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
