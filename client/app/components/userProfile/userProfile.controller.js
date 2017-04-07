
class UserProfileController {
  constructor(factorsDataService,userDataService) {
      this.name = 'userProfile';
      this.userData = userDataService;
      this.factorsData = factorsDataService;
  }
  
  $onInit(){
    this.readyTest =false;
    
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
            _.forEach(this.user.factors, (userSubCategory)=>{
              if(_.find(userSubCategory.subClasses, (o)=>{if(o.name === subcategory.name) return true})){
                subcategory.isToggle = true;
              }else {
                subcategory.isToggle = false;
              }
            });
          });
        });
        //this._initToggles();
        //this._initializeUserFactorsWithAllFactors();
        this.readyTest = true;
      });
    });
  }
  
  _initToggles(){
    _.forEach(this.factorsList, (category) =>{
      _.forEach(category.subClasses , (subCategory) =>{
        subCategory.isToggle = false;
        return subCategory;
      });
    });
  }
  
  
  // _initializeUserFactorsWithAllFactors(){
  //   _.forEach(this.factorsList , (category)=>{
  //     _.forEach(category.subClasses , (subcategory)=>{
  //       _.forEach(this.user.factors, (userSubCategory)=>{
  //         if(_.find(userSubCategory.subClasses,subcategory)){
  //           subcategory.isToggle = true;
  //         }else {
  //           subcategory.isToggle = false;
  //         }
  //       });
  //     });
  //   });
  // }
  
  
  
  
  
  onCheckBoxChange(index,category,categoryClass){
    //todo vaild obj and only then.
    this.objToSend = [];
    let subClasses = [];
    subClasses.push({'name':categoryClass});
    this.objToSend.push( {'class':category,'subClasses':subClasses});
    
    this.userData.updateUserData(this.objToSend);
  }
}


UserProfileController.$inject = ['factorsDataService','userDataService'];
export default UserProfileController;
