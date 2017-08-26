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
    this.newFactorsHobbies = [];
    this.notificationAlert = false;
    this.viewReady = false;
    this._checkOptionalMatchExistence();
      USER_DATA_SERVICE.get(this).getUserData().then((userData)=> {
        FACTORS_DATA_SERVICE.get(this).getFactorData().then((factorData) => {
        factorData  = _.get(factorData,'data',null);
        userData  = _.get(userData,'data',null);
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
        });
        this.viewReady = true;
      });
    });
  }
  
  //check optional match existence if -1 will not show anything
  _checkOptionalMatchExistence(){
    USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
      optionalMatchData = _.get(optionalMatchData,'data',null);
      this.notificationAlert    = _.get(optionalMatchData,'id',null);
      this.notificationAlert === -1 ? this.notificationAlert = false : this.notificationAlert = !_.isNull(optionalMatchData) && this.notifyMe();
    });
  }
  
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
    USER_DATA_SERVICE.get(this).updateUserData({'Data':objToSend}).then(()=>{
      STATE.get(this).go('matchRequest');
    });
  }
  
  createNewFactorsHobby() {
    this.newFactorsHobbies.push({
      name:null,
      isDisable:false
    });
  }
  saveDynamicFactor(index,factorHobby) {
    if(this._validNewFactorName(index)){
      FACTORS_DATA_SERVICE.get(this).addDynamicFactor(factorHobby.name).then(()=>{
        this.newFactorsHobbies[index].isDisable = true;
        this.newFactorsHobbies[index].name = factorHobby.name;
      });
    }
  }
  
  _validNewFactorName(index) {
    return !_.isEmpty(this.newFactorsHobbies[index].name);
  }
  
  removeHobbyFactor(index,factorHobby) {
    if (!_.isEmpty(this.newFactorsHobbies[index])) {
      FACTORS_DATA_SERVICE.get(this).removeDynamicFactor(factorHobby.name).then(() => {
        this.newFactorsHobbies.splice(index, 1);
      });
    }
  }
  
  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support system notifications");
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      let notification = this.spawnNotification("You Have a match!",'content/images/icons/logo.png','Socialize')
    }
  }
  
  spawnNotification(theBody,theIcon,theTitle) {
    let options = {
      body: theBody,
      icon: theIcon
    };
    let n = new Notification(theTitle,options);
    setTimeout(n.close.bind(n), 5000);
  }
  
}


UserProfileController.$inject = ['$state','factorsDataService','userDataService'];
export default UserProfileController;
