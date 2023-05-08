import { ACH_POSITIVE_PAY_PAGE_PATH } from '../../../data';
import { Page } from '@playwright/test';
import { BasePage } from '../base-page.po';

export class AchPositivePayPage extends BasePage {
  readonly journeyUi = this.page.locator('bb-ach-positive-pay-journey');

  constructor(page: Page) {
    super(page);
  }

  async navigateTo() {
    await super.navigateTo(ACH_POSITIVE_PAY_PAGE_PATH);
  }
}
