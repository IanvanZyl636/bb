import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsCommunicationService } from '@backbase/accounts-journey-ang';

@Injectable({
  providedIn: 'root',
})
export class AccountsBatchesCommunicationService implements AccountsCommunicationService {
  constructor(private readonly router: Router) {}

  navigateToBatchDetails(id: string): void {
    this.router.navigate(['batches/manage/details', { batchOrderId: id }]);
  }
}
