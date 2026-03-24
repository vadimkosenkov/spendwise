import { inject, Injectable } from '@angular/core';
import { DashboardSummary } from '../models/dashboard.models';
import { map, Observable } from 'rxjs';
import { GET_DASHBOARD } from '../dashboard.queries';
import { Apollo } from "apollo-angular";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apollo: Apollo = inject(Apollo);

  getDashboard(): Observable<DashboardSummary> {
    return this.apollo
      .watchQuery({
        query: GET_DASHBOARD
      })
      .valueChanges.pipe(
        map((result: any) => result.data?.dashboard)
      );
  }
}
