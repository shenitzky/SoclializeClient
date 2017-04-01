class ChooseHobbiesController {
    constructor() {
      this.name = 'chooseHobbies';
    }
  
    $onInit(){
      this.factorsMock =
        [
          {
            'class': 'Sport',
            'subclasses': [
              {
                'name': 'football',
                'url': './../../app/common/assets/games.png'
              },
              {
                'name': 'tennis',
                'url': './../../app/common/assets/games.png'
              }
            ]
          },
          {
            'class': 'Hobbies',
            'subclasses': [
              {
                'name': 'gaming',
                'url': './../../app/common/assets/games.png'
              },
              {
                'name': 'ps4',
                'url': './../../app/common/assets/games.png'
              }
            ]
          }
        ];
      this.factorsMockDeep = _.cloneDeep(this.factorsMock);
      _.forEach(this.factorsMockDeep, (category) =>{
        _.forEach(category.subclasses , (subCategory) =>{
          subCategory.isToggle = false;
        });
      });
    }
    
  sendCategoriesToServer(){
  }
  
  onChooseSubCategory(subClassName){
    let toggleStatus = false;
    var subClassElement = document.getElementById(subClassName);
    _.forEach(this.factorsMockDeep, (category) =>{
      _.forEach(category.subclasses , (subCategory) =>{
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
    _.forEach(this.factorsMockDeep, (category) =>{
      _.forEach(category.subclasses , (subCategory) =>{
        if(subCategory.name === childName ){
          subCategory.isToggle = !subCategory.isToggle;
        }
      });
    });
  }
}

ChooseHobbiesController.$inject = [];
export default ChooseHobbiesController;
