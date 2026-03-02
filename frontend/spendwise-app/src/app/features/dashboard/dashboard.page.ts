import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DashboardService } from './services/dashboard.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule],
})
export class DashboardPage {

  expenseSummary = this.dashboardService.getExpenseSummary();
  budgetSummary = this.dashboardService.getBudgetSummary();

  constructor(
    private dashboardService: DashboardService
  ) {}
}

