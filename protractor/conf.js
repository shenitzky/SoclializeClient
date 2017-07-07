/**
 * Created by Yossi on 24/06/2017.
 * To Run protractor:
 * Go to protractor folder
 * webdriver-manager start
 * protractor conf.js
 */

'use strict';

require('babel-core/register');
var path = require('path');
var _ = require('lodash');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function () {
    require("jasmine-expect");
    browser.getWithVersion = (url, timeout) => {
      let urlToGet = url;
      let baseUrl = browser.baseUrl;
      let paramPosition = baseUrl.indexOf('?');
      if (url.indexOf('http') === -1 && paramPosition >= 0) {
        let baseUrlWithoutParam = baseUrl.slice(0, paramPosition);
        if (!baseUrlWithoutParam.endsWith('/')) {
          baseUrlWithoutParam += '/';
        }
        let appVersion = baseUrl.slice(paramPosition);
        if (_.includes(url, '?')) {
          appVersion = appVersion.replace('?', '&');
        }
        urlToGet = [baseUrlWithoutParam, url, appVersion].join('');
      }
      console.log('navigating to:', urlToGet);
      return browser.get(urlToGet)
    };
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: 'all',
        displaySpecDuration: true
      }
    }));
  }
};