const WINDOW = new WeakMap();
const HTTP = new WeakMap();
const STATE = new WeakMap();


//todo 1.maybe not need $http
//todo


class MatchRequestController {
  constructor($window,$http,$state,userDataService,matchDataService) {
    WINDOW.set(this,$window);
    HTTP.set(this,$http);
    STATE.set(this,$state);
    
    this.userData    = userDataService;
    this.matchData   = matchDataService;
  }
  
  $onInit(){
    this.viewReady = false;
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
  
  
  //todo not using it at this moment if needed delete it.
  onCheckboxChange(obj,model,key) {
  
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
  
}

MatchRequestController.$inject = ['$window','$http','$state','userDataService','matchDataService'];
export default MatchRequestController;
