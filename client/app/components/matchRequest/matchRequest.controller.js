const WINDOW = new WeakMap();
const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const MATCH_DATA_SERIVE = new WeakMap();
const FACTOR_DATA_SERVICE = new WeakMap();

class MatchRequestController {
  constructor($window, $state, userDataService, matchDataService,$mdSidenav,factorsDataService) {
    WINDOW.set(this, $window);
    STATE.set(this, $state);
    USER_DATA_SERVICE.set(this, userDataService);
    MATCH_DATA_SERIVE.set(this, matchDataService);
    FACTOR_DATA_SERVICE.set(this, factorsDataService);
    this.mdSidenav = $mdSidenav;
  }
  
  //Init match request
  $onInit() {
    this._bubbleInit();
    this.noFactorsError     = false;
    this.notificationAlert  = false;
    this.allReadyMatchExist = false;
    
    this.maxDistance   = 26;
    this.matchPercent  = 50;
    this.viewReady     = false;
    
    this.toggleLeft    = this.buildToggler('left');
    this.toggleRight   = this.buildToggler('right');
    this._checkOptionalMatchExistence();
    
    this._getLocation();
    USER_DATA_SERVICE.get(this).getUserData().then((userData) => {
      userData = _.get(userData, 'data');
      this.user = userData;
      this.viewReady = true;
      this._setActiveToggle();
    });
  }
  
  //Settings active toggle according to user factors
  _setActiveToggle() {
    _.forEach(this.user.factors, (category) => {
      _.forEach(category.subClasses, (subCategory) => {
        subCategory.isToggle = true;
      });
    });
  }
  
  //get uer current location
  _getLocation() {
    WINDOW.get(this).navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }, error => {
      console.log('error', error)
    });
  }
  
  //Valid match request before send it to server
  validMatchRequest() {
    if(_.isUndefined(this.user.factors) || _.isEmpty(this.user.factors)) {
      this.noFactorsError = true
    } else if (_.isUndefined(this.CurrentMatchFactors)) {
      this.CurrentMatchFactors = _.cloneDeep(this.user.factors);
      this._sendMatchRequest();
    } else if (_.isEmpty(this.CurrentMatchFactors)){
      this.noFactorsError = true
    } else if (!_.isEmpty(this.CurrentMatchFactors)) {
      this._sendMatchRequest();
    }
  }
  
  //Start match request with current parameters or present already have a match request
  _sendMatchRequest(){
    this.noFactorsError = false;
    
    let currentLocation = {
      'lat': this.latitude,
      'lng': this.longitude
    };

    MATCH_DATA_SERIVE.get(this).createMatchDataRequest(
      {
        'matchFactors': this.CurrentMatchFactors,
        'location': currentLocation,
        'maxDistance': this.maxDistance,
        'minMatchStrength': this.matchPercent
      })
      .then((receivedMatchRequestId) => {
        receivedMatchRequestId = _.get(receivedMatchRequestId, 'data', null);
        _.isEqual(receivedMatchRequestId, '-1') ? this.allReadyMatchExist = true :
          STATE.get(this).go('matchRequestUpdate', {
            'MatchRequestId': receivedMatchRequestId,
            'location': currentLocation
          });
      });
  
  }
  
  //Checking the integrity of match request object before request to find a match if true start match object will be sent to the server else massage will appear to user
  //Toggle and set current match settings
  setCurrentMatchFactors() {
    let objToSend = [];
    let tempCategoryName = true;
    let catName = '';
    this.CurrentMatchFactors = _.cloneDeep(this.user.factors);
    _.forEach(this.CurrentMatchFactors, (category) => {
      let tempFactor = {};
      let tempSubcategory = [];
      _.forEach(category.subClasses, (subcategory) => {
        if (subcategory.isToggle) {
          tempCategoryName = false;
          catName = category.name;
          tempSubcategory.push(subcategory);
        }
      });
      if (!_.isEmpty(tempSubcategory)) {
        tempFactor = {
          'Class': category.class,
          'SubClasses': tempSubcategory
        };
        objToSend.push(tempFactor);
      }
    });
    this.CurrentMatchFactors = objToSend;
  }
  
  //Toggle builder
  buildToggler(componentId) {
    return () => {
      this.mdSidenav(componentId).toggle();
    };
  }
  //check optional match existence
  _checkOptionalMatchExistence(){
    USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
      optionalMatchData = _.get(optionalMatchData,'data',null);
      this.notificationAlert    = _.get(optionalMatchData,'id',null);
      this.notificationAlert === -1 ? this.notificationAlert = false : this.notificationAlert = !_.isNull(optionalMatchData);
    });
  }
  
  //bubble init getting images data from server
  _bubbleInit() {
    this.viewReady  = false;
    this.bubblePics = {};
    FACTOR_DATA_SERVICE.get(this).getImagesForBubble().then((data)=>{
      this.bubblePics = _.get(data,'data',null);
      _.map(this.bubblePics, bubble => {bubble.style = this._bubblesBuilder()});
      this.viewReady = true;
    });
  }

  //bubbles image builder puting images as random on screen
  _bubblesBuilder() {

      this.pos_rand = Math.floor(Math.random() * 60);

      // Randomise the time they start rising (0-15s)
      this.delay_rand = Math.floor(Math.random() * 16);

      // Randomise their speed (3-8s)
      this.speed_rand = 10 + Math.floor(Math.random() * 9);

      // Random blur
      this.blur_rand = Math.floor(Math.random() * 1.2);
      return {
        'left' : this.pos_rand + '%',
        '-webkit-animation-duration' : this.speed_rand + 's',
        '-moz-animation-duration' : this.speed_rand + 's',
        '-ms-animation-duration' : this.speed_rand + 's',
        'animation-duration' : this.speed_rand + 's',

        '-webkit-animation-delay' : this.delay_rand + 's',
        '-moz-animation-delay' : this.delay_rand + 's',
        '-ms-animation-delay' : this.delay_rand + 's',
        'animation-delay' : this.delay_rand + 's',

        '-webkit-filter' : 'blur(' + this.blur_rand  + 'px)',
        '-moz-filter' : 'blur(' + this.blur_rand  + 'px)',
        '-ms-filter' : 'blur(' + this.blur_rand  + 'px)',
        'filter' : 'blur(' + this.blur_rand  + 'px)'
      };
  }
  
}

MatchRequestController.$inject = ['$window','$state', 'userDataService', 'matchDataService','$mdSidenav','factorsDataService'];
export default MatchRequestController;
