import { Component, effect, inject, signal, WritableSignal } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { DashboardService } from "./services/dashboard.service";
import { DashboardSummary } from "./models/dashboard.models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule],
})
export class DashboardPage {
  private dashboardService: DashboardService = inject(DashboardService);

  public dashboard: WritableSignal<DashboardSummary | null>  = this.dashboardService.dashboard;
  public loading: WritableSignal<boolean> = this.dashboardService.loading;
  public error: WritableSignal<string> = this.dashboardService.error;

  constructor() {
    effect((): void => {
      this.dashboardService.loadDashboard();
    });
  }
}

