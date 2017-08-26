/**
 * Created by Yossi on 24/06/2017.
 */
describe('Protractor - Smoke Test', ()=> {

  beforeEach(()=> {
    browser.get('http://localhost:3000/');
    browser.driver.manage().window().setSize(414, 736);
  });
  
  it('should start app and get into match request page', ()=> {
    browser.sleep(5000);
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/matchRequest');
  });
  
  it('should click on profile and get to profile page', ()=> {
    let userPrifile = browser.element(by.css('#userProfile')).click();
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/userProfile');
    browser.sleep(1000);
    browser.element(by.css('checkbox-element md-checkbox')).click();
  });
  
  it('should click on profile and get to profile page', ()=> {
    let macthRequest = browser.element(by.css('#notifications')).click();
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/notifications');
    browser.sleep(1000);
  });
  
  
  it('should click on profile and get to profile page', ()=> {
    let macthRequest = browser.element(by.css('#match')).click();
    expect(browser.getCurrentUrl())
      .toBe('http://localhost:3000/matchRequest');
    browser.sleep(1000);
    browser.element(by.css('.find-match-title')).click();
    browser.sleep(7000);
    browser.element(by.css('.notification-container')).click();
    browser.sleep(3000);
  });
});
