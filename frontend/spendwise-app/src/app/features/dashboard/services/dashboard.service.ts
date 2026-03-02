import { Injectable } from '@angular/core';
import { ExpenseSummary, BudgetSummary } from '../models/dashboard.models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  getExpenseSummary(): ExpenseSummary {
    return {
      totalSpent: 420,
      currency: 'EUR',
    };
  }

  getBudgetSummary(): BudgetSummary {
    return {
      limit: 1000,
      spent: 420,
      remaining: 580,
    };
  }
}
