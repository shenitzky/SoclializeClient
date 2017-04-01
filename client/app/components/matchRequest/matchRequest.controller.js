
class MatchRequestController {
  constructor(factorsDataService) {
    this.factorsData = factorsDataService;
  }
  
  $onInit(){
    
    this.factorsMock =
      [
        {
          'class': 'Sport',
          'subclasses':
            [
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
      factors: this.factorsMock
    };
    
    // this.factorsData.getFactorData().then((data)=>{
    //   data = data.data;
    // });
  }
  
  onCheckboxChange(obj,model,key){
    debugger;
  }
  
}

MatchRequestController.$inject = ['factorsDataService'];
export default MatchRequestController;
