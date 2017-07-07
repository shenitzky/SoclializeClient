/**
 * Created by Yossi on 24/06/2017.
 */
describe('Protractor - Smoke Test', ()=> {

  beforeEach(()=> {
    browser.get('http://localhost:3000/');
  });
  
  it('should start app and get into match request page', ()=> {
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/matchRequest');
  });
  
  it('should click on profile and get to profile page', ()=> {
    let userPrifile = browser.element(by.css('#userProfile')).click();
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/userProfile');
  });
  
  it('should click on profile and get to notifications page', ()=> {
    let userPrifile = browser.element(by.css('#notifications')).click();
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/notifications');
  });
  
});
