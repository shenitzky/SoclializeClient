const WINDOW = new WeakMap();

class MatchRequestController {
  constructor($window,factorsDataService,userDataService,matchDataService) {
    WINDOW.set(this,$window);
    this.userData    = userDataService;
    this.factorsData = factorsDataService;
    this.matchData   = matchDataService;
  }
  
  $onInit(){
    this.viewReady = false;
    
    this.userData.getUserData().then((userData)=>{
      
      this.factorsData.getFactorData().then((factorData)=>{
        
        factorData  = _.get(factorData,'data');
        userData  = _.get(userData,'data');
        this.factorsList = factorData;
        this.user = userData;
        this.viewReady = true;
        this._setActiveToggle();
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
  
  
  
  _setActiveToggle(){
    _.forEach(this.user.factors, (category) =>{
      _.forEach(category.subClasses , (subCategory) =>{
        subCategory.isToggle = true;
      });
    });
  }
  
  
  onCheckboxChange(obj,model,key) {
    //console.log("this.user.factors",this.user.factors);
    //this._getLocationAndSendMatchRequest();
  
    this.matchData.createMatchDataRequest(
      {
        'matchFactors':this.user.factors,
        'location':
          {
            'lat':38,
            'lng':38
          }
      }).then((data)=>{console.log("data",data)});
    
    
    //todo need to find it in this.user.factors and remove it/add it
    //todo only send it when user press findMatch
  }
  
}

MatchRequestController.$inject = ['$window','factorsDataService','userDataService','matchDataService'];
export default MatchRequestController;
