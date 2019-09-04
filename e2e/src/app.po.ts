import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<string>{
    return browser.get(browser.baseUrl) as Promise<string>;
  }

  public getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
