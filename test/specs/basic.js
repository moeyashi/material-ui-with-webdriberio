describe('material-ui component', () => {
  it('go to about page and back main page', () => {
    browser.url('/'); //baseURLで指定したのがここで活きる
    browser.$('=Go to the about page').click(); //リンク名Selector
    const button = browser.react$('Button'); //React Selector
    button.waitForExist(5000);
    button.click();
    browser.$('=Go to the about page').waitForExist(5000);
  });
});
