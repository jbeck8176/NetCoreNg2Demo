import { NetCoreNg2DemoPage } from './app.po';

describe('net-core-ng2-demo App', function() {
  let page: NetCoreNg2DemoPage;

  beforeEach(() => {
    page = new NetCoreNg2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
