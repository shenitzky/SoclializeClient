
class UserProfileController {
  constructor(factorsDataService,userDataService) {
      this.name = 'userProfile';
      this.userData = userDataService;
      this.factorsData = factorsDataService;
  }
  
  $onInit(){
    this.readyTest =false;
    this.factorsMock =
      [
        {
          'class': 'Sport',
          'subclasses': [
            {
              'name': 'football',
              'url': './../../app/common/assets/games.png',
            },
            {
              'name': 'tennis',
              'url': './../../app/common/assets/games.png',
            }
          ]
        },
        {
          'class': 'Hobbies',
          'subclasses': [
            {
              'name': 'gaming',
              'url': './../../app/common/assets/games.png',
            },
            {
              'name': 'ps4',
              'url': './../../app/common/assets/games.png',
            }
          ]
        }
      ];
    //todo i assume that when i getting the data i init it like this mock only then i cross the data.
    //todo go over the user factor and add to each factor subClass isChosen field true.
    this.factorsMockForUser =
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
        }
      ];
  
    this.userMock = {
      id: "1143afed-6abc-4ef4-b42e-894720979b3a",
      mail: "xxx@gmail.com",
      firstName: "Yossi",
      lastName: "G",
      description: "Yossi",
      imgUrl: "",
      age: 10,
      premium: false,
      factors: this.factorsMockForUser
    };
    
    
    //todo need to imporove this.
    _.forEach(this.factorsMock , (category)=>{
      _.forEach(category.subclasses , (subcategory)=>{
        _.forEach(this.userMock.factors, (userSubCategory)=>{
          if(_.find(userSubCategory.subclasses,subcategory)){
            subcategory.isToggle = true;
          }else {
            subcategory.isToggle = false;
          }
        });
      });
    });
    this.readyTest = true;
  }
  
  onCheckBoxChange(index,category,categoryClass){
    debugger;
  }
  
}


UserProfileController.$inject = ['factorsDataService','userDataService'];
export default UserProfileController;
