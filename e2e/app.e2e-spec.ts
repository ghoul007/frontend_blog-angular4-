import { Angular4TutoPage } from './app.po';

describe('angular4-tuto App', () => {
  let page: Angular4TutoPage;

  beforeEach(() => {
    page = new Angular4TutoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
