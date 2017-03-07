import { VrDashPage } from './app.po';

describe('vr-dash App', () => {
  let page: VrDashPage;

  beforeEach(() => {
    page = new VrDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
