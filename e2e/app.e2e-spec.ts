import { ProductAppPage } from './app.po';

describe('product-app App', () => {
  let page: ProductAppPage;

  beforeEach(() => {
    page = new ProductAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
