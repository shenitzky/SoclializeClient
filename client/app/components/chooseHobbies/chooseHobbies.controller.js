class ChooseHobbiesController {
    constructor(userDataService,factorsDataService) {
      this.userData = userDataService;
      this.factorsData = factorsDataService;
      this.factorsCopy = [];
    }
  
    $onInit(){
      this.viewReady = false;
      this.factorsData.getFactorData().then((factorData)=>{
        factorData       =  _.get(factorData,'data');
        this.factorsCopy =  _.cloneDeep(factorData);
        _.forEach(this.factorsCopy, (category) =>{
          _.forEach(category.subClasses , (subCategory) =>{
            subCategory.isToggle = false;
          });
        });
        this.viewReady = true;
      });
    }
    
  sendCategoriesToServer(){
  
  }
  
  onChooseSubCategory(subClassName){
    let toggleStatus = false;
    var subClassElement = document.getElementById(subClassName);
    _.forEach(this.factorsCopy, (category) =>{
      _.forEach(category.subClasses , (subCategory) =>{
        if(subCategory.name === subClassName){
          toggleStatus = subCategory.isToggle;
        }
      });
    });
    if(toggleStatus){
      subClassElement.className += ' vIconOn';
    }else{
      subClassElement.classList.remove('vIconOn');
    }
  }
  
  onSubCategoryClick(childName){
    _.forEach(this.factorsCopy, (category) =>{
      _.forEach(category.subClasses , (subCategory) =>{
        if(subCategory.name === childName ){
          subCategory.isToggle = !subCategory.isToggle;
        }
      });
    });
  }
  
}

ChooseHobbiesController.$inject = ['userDataService','factorsDataService'];
export default ChooseHobbiesController;
