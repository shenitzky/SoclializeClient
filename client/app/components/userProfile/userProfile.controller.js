
class UserProfileController {
  constructor(factorsDataService,userDataService) {
      this.name = 'userProfile';
      this.userData = userDataService;
      this.factorsData = factorsDataService;
  }
  
  $onInit(){
    this.viewReady = false;
    this.userData.getUserData().then((userData)=> {
      this.factorsData.getFactorData().then((factorData) => {
        
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
    this.userData.updateUserData({'Data':objToSend});
  }
}


UserProfileController.$inject = ['factorsDataService','userDataService'];
export default UserProfileController;
