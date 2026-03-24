import { Component, inject } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { DashboardService } from "./services/dashboard.service";
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule, AsyncPipe],
})
export class DashboardPage {
  dashboardService: DashboardService = inject(DashboardService);
  dashboard$: Observable<any> = this.dashboardService.getDashboard();
}

