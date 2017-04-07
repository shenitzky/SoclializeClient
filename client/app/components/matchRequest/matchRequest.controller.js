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
  
  
  _getLocationAndSendMatchRequest() {
    WINDOW.get(this).navigator.geolocation.getCurrentPosition((position)=>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log("this.latitude",this.latitude);
      console.log("this.longitude",this.longitude);
      console.log("this.user.factors",this.user.factors);
      this.userData.updateUserData(
        {
          'matchFactors':this.user.factors,
          'location':
            {
              'lat':this.latitude,
              'lng':this.longitude
            }
        }).then((data)=>{console.log("data",data)});
    },error =>{console.log('error',error)});
  }
  
  onCheckboxChange(obj,model,key) {
    //console.log("this.user.factors",this.user.factors);
    //this._getLocationAndSendMatchRequest();
    
    
    // this.matchData.createMatchDataRequest(
    //   {
    //     'matchFactors':this.user.factors,
    //     'location':
    //       {
    //         'lat':38,
    //         'lng':38
    //       }
    //   }).then((data)=>{console.log("data",data)});
    //
    //
    //todo need to find it in this.user.factors and remove it/add it
    //todo only send it when user press findMatch
  }
  
  
  sendMatchRequest(){
    debugger;
    this.matchData.createMatchDataRequest(
      {
        'matchFactors':this.user.factors,
        'location':
          {
            'lat':38,
            'lng':38
          }
      })
      .then((data)=>{
      console.log("data",data);
      STATE.get(this).go('notifications',{'index':'yossiTest'});
    });
  }
  
}

MatchRequestController.$inject = ['$window','$http','$state','userDataService','matchDataService'];
export default MatchRequestController;
