import { CHECK_POSITIVE_PAY_PAGE_PATH } from '../../../data';
import { Page } from '@playwright/test';
import { BasePage } from '../base-page.po';

export class CheckPositivePayPage extends BasePage {
  readonly journeyUi = this.page.locator('bb-positive-pay-journey');

  constructor(page: Page) {
    super(page);
  }

  async navigateTo() {
    await super.navigateTo(CHECK_POSITIVE_PAY_PAGE_PATH);
  }
}
