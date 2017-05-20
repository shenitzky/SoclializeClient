const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const FACTORS_DATA_SERVICE = new WeakMap();

class UserProfileController {
  constructor($state,factorsDataService,userDataService) {
      STATE.set(this,$state);
      USER_DATA_SERVICE.set(this,userDataService);
      FACTORS_DATA_SERVICE.set(this,factorsDataService);
  }
  
  $onInit(){
    //this.optionalMatchData = {};
    this.viewReady = false;
      USER_DATA_SERVICE.get(this).getUserData().then((userData)=> {
        FACTORS_DATA_SERVICE.get(this).getFactorData().then((factorData) => {
        factorData  = _.get(factorData,'data');
        userData  = _.get(userData,'data');
        this.factorsList = factorData;
        this.user = userData;
  
  
        _.forEach(this.factorsList, (category) =>{
          _.forEach(category.subClasses , (subCategory) =>{
            subCategory.isToggle = false;
            return subCategory;
          });
        });
        
        _.forEach(this.factorsList , (category)=>{
          _.forEach(category.subClasses , (subcategory)=>{
            _.forEach(this.user.factors, (userFactor)=>{
              _.forEach(userFactor.subClasses, (userFactorSubclass)=>{
                if(!subcategory.isToggle){
                  subcategory.isToggle = userFactorSubclass.name === subcategory.name;
                }
              });
            });
          });
          this.viewReady = true;
        });
      });
    });
    //this.checkUserOptinalMatchOverTime();
  }
  
  
  // checkUserOptinalMatchOverTime(){
  //   USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
  //     _.isNull(optionalMatchData) ? '' : this._setUpNotification(optionalMatchData);
  //   });
  // }
  //
  // _setUpNotification(optionalMatchData){
  //   debugger;
  //   var notificationIcon = document.getElementById(notificationIcon);
  //   this.optionalMatchData = _.get(optionalMatchData,'data');
  // }
  
  
  sendUserFactors(){
    let objToSend = [];
    let tempCategoryName = true;
    let catName  = '';
    
    _.forEach(this.factorsList , (category)=>{
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
    USER_DATA_SERVICE.get(this).updateUserData({'Data':objToSend});
    STATE.get(this).go('matchRequest');
  }
}


UserProfileController.$inject = ['$state','factorsDataService','userDataService'];
export default UserProfileController;
