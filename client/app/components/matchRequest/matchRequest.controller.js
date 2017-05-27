const WINDOW = new WeakMap();
const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const MATCH_DATA_SERIVE = new WeakMap();

class MatchRequestController {
  constructor($window, $state, userDataService, matchDataService, $mdSidenav) {
    WINDOW.set(this, $window);
    STATE.set(this, $state);
    USER_DATA_SERVICE.set(this, userDataService);
    MATCH_DATA_SERIVE.set(this, matchDataService);
    this.mdSidenav = $mdSidenav
  }
  
  //Init match request
  $onInit() {
    this.notificationAlert  = false;
    this.allReadyMatchExist = false;
    
    this.maxDistance = 26;
    this.viewReady   = false;
    
    this.toggleLeft  = this.buildToggler('left');
    this.toggleRight = this.buildToggler('right');
  
    this.checkOptionalMatchExistence();
    
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
      console.log("this.latitude", this.latitude);
      console.log("this.longitude", this.longitude);
    }, error => {
      this.latitude = 32.090346;
      this.longitude = 34.802194;
      console.log('error', error)
    });
  }
  
  //Start match request with current parameters or present already have a match request
  sendMatchRequest() {
    let currentLocation = {
      'lat': this.latitude,
      'lng': this.longitude
    };
    
    MATCH_DATA_SERIVE.get(this).createMatchDataRequest(
      {
        'matchFactors': this.CurrentMatchFactors,
        'location': currentLocation,
        'maxDistance':this.maxDistance
      })
      .then((receivedMatchRequestId) => {
        receivedMatchRequestId = _.get(receivedMatchRequestId, 'data',null);
        _.isEqual(receivedMatchRequestId, '-1') ? this.allReadyMatchExist = true :
          STATE.get(this).go('matchRequestUpdate', {
            'MatchRequestId': receivedMatchRequestId,
            'location': currentLocation
          });
      });
  }
  
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
  checkOptionalMatchExistence(){
    USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
      optionalMatchData = _.get(optionalMatchData,'data',null);
      this.notificationAlert = !_.isNull(optionalMatchData);
    });
  }
  
}

MatchRequestController.$inject = ['$window','$state', 'userDataService', 'matchDataService', '$mdSidenav'];
export default MatchRequestController;
