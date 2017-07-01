import { CalcAngularPage } from './app.po';

describe('calc-angular App', () => {
  let page: CalcAngularPage;

  beforeEach(() => {
    page = new CalcAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
