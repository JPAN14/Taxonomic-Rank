import { TaxonomicRankPage } from './app.po';

describe('taxonomic-rank App', () => {
  let page: TaxonomicRankPage;

  beforeEach(() => {
    page = new TaxonomicRankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
