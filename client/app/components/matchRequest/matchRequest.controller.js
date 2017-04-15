const WINDOW = new WeakMap();
const HTTP = new WeakMap();
const STATE = new WeakMap();


//todo 1.maybe not need $http
//todo


class MatchRequestController {
  constructor($window,$http,$state,userDataService,matchDataService,$mdSidenav) {
    WINDOW.set(this,$window);
    HTTP.set(this,$http);
    STATE.set(this,$state);
    
    this.userData    = userDataService;
    this.matchData   = matchDataService;
    this.mdSidenav   = $mdSidenav
  }
  
  $onInit(){
    this.viewReady = false;
    
    this.toggleLeft = this.buildToggler('left');
    this.toggleRight = this.buildToggler('right');
    
    this._getLocation();
    this.userData.getUserData().then((userData)=>{
        userData  = _.get(userData,'data');
        this.user = userData;
        this.viewReady = true;
        this._setActiveToggle();
    });
  }
  
  _setActiveToggle(){
    _.forEach(this.user.factors, (category) =>{
      _.forEach(category.subClasses , (subCategory) =>{
        subCategory.isToggle = true;
      });
    });
  }
  
  
  _getLocation() {
    WINDOW.get(this).navigator.geolocation.getCurrentPosition((position)=>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log("this.latitude",this.latitude);
      console.log("this.longitude",this.longitude);
    },error =>{console.log('error',error)});
  }
  
  sendMatchRequest(){
    let currentLocation = {
      'lat':this.latitude,
      'lng':this.longitude
    };
    
    this.matchData.createMatchDataRequest(
      {
        'matchFactors':this.user.factors,
        'location':currentLocation
      })
      .then((receivedMatchRequestId)=>{
      console.log("receivedMatchRequestId",receivedMatchRequestId);
      STATE.get(this).go('matchRequestUpdate',{'MatchRequestId':_.get(receivedMatchRequestId,'data'),'location':currentLocation});
    });
  }
  
  sendCurrentMatchFactors(){
    let objToSend = [];
    let tempCategoryName = true;
    let catName  = '';
    _.forEach(this.user.factors , (category)=>{
      let tempFactor = {};
      let tempSubcategory = [];
      _.forEach(category.subClasses , (subcategory)=>{
        if(subcategory.isToggle){
          tempCategoryName = false;
          catName = category.name;
          tempSubcategory.push(subcategory);
        }
      });
      if (!_.isEmpty(tempSubcategory)){
        tempFactor = {
          'Class': category.class,
          'SubClasses': tempSubcategory
        };
        objToSend.push(tempFactor);
      }
    });
    debugger;
    this.user.factors = objToSend;
  }
  
  
  buildToggler(componentId) {
    return ()=> {
      this.mdSidenav(componentId).toggle();
    };
  }
  
}

MatchRequestController.$inject = ['$window','$http','$state','userDataService','matchDataService','$mdSidenav'];
export default MatchRequestController;
