import { PeliculasappPage } from './app.po';

describe('peliculasapp App', () => {
  let page: PeliculasappPage;

  beforeEach(() => {
    page = new PeliculasappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
