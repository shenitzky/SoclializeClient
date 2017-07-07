const STATE = new WeakMap();
const FACTOR_DATA_SERVICE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();

class ChooseHobbiesController {
  constructor($state,userDataService, factorsDataService) {
    STATE.set(this, $state);
    USER_DATA_SERVICE.set(this, userDataService);
    FACTOR_DATA_SERVICE.set(this, factorsDataService);
    this.factorsCopy = [];
    this.suggestedVarray = [];
  }
  
  $onInit() {
    this.viewReady = false;
    //Getting all factors from server
    FACTOR_DATA_SERVICE.get(this).getFactorData().then((factorData) => {
      factorData = _.get(factorData, 'data');
      this.factorsCopy = _.cloneDeep(factorData);
      //Adding isToggle status to know when factor has been pressed
      _.forEach(this.factorsCopy, (category) => {
        category.noImg = category.class === 'Suggested by users';
        _.forEach(category.subClasses, (subCategory) => {
          subCategory.isToggle = false;
        });
      });
      //Html view is ready
      this.viewReady = true;
    });
  }
  
  //Sending categories to Server User Data CategoriesToServer
  sendCategoriesToServer() {
    let objToSend = [];
    let tempCategoryName = true;
    let catName = '';
    
    _.forEach(this.factorsCopy, (category) => {
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
          'subclasses': tempSubcategory
        };
        objToSend.push(tempFactor);
      }
    });
    USER_DATA_SERVICE.get(this).updateUserData({'Data': objToSend}).then(()=>{
      STATE.get(this).go('matchRequest');
    });
  }
  
  //When choose a sub category adding a class of V icon
  onChooseSubCategory(subClassName) {
    let toggleStatus = false;
    let suggestedV = false;
    let subClassElement = document.getElementById(subClassName);
    
    _.forEach(this.factorsCopy, (category) => {
      suggestedV  = category.noImg;
      _.forEach(category.subClasses, (subCategory) => {
        if (subCategory.name === subClassName) {
          toggleStatus = !subCategory.isToggle;
          subCategory.isToggle = toggleStatus;
        }
      });
    });
    if (toggleStatus && suggestedV) {
      //If Icon has been selected creating a div hat draw the v icon.
      let checkmark_stem = document.createElement('div');
      checkmark_stem.id = `checkmark_stem_${subClassName}`;
      checkmark_stem.className = 'checkmark_stem';

      let checkmark_kick = document.createElement('div');
      checkmark_kick.id = `checkmark_kick_${subClassName}`;
      checkmark_kick.className = 'checkmark_kick';

      subClassElement.appendChild(checkmark_stem);
      subClassElement.appendChild(checkmark_kick);

      subClassElement = null;
    } else {
      //If Icon has been deselected removing the v icon.
      document.getElementById(`checkmark_stem_${subClassName}`).remove();
      document.getElementById(`checkmark_kick_${subClassName}`).remove();
    }
  }
}

ChooseHobbiesController.$inject = ['$state','userDataService', 'factorsDataService'];
export default ChooseHobbiesController;
