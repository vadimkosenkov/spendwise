export interface ExpenseSummary {
  totalSpent: number;
  currency: string;
}

export interface BudgetSummary {
  limit: number;
  spent: number;
  remaining: number;
}
