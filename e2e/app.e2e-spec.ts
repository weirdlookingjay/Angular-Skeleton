import { ClarkAppPage } from './app.po';

describe('clark-app App', () => {
  let page: ClarkAppPage;

  beforeEach(() => {
    page = new ClarkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
