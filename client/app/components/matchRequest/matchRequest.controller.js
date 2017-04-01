
class MatchRequestController {
  constructor(factorsDataService) {
    this.factorsData = factorsDataService;
  }
  
  $onInit(){
    this.factorsMock = [{'class': 'Sport', 'subclasses': {'name': 'football', 'url': './../../app/common/assets/games.png'}},
                        {'class': 'Hobbies', 'subclasses': {'name': 'gaming', 'url': './../../app/common/assets/games.png'}}];
    // this.factorsData.getFactorData().then((data)=>{
    //   data = data.data;
    // });
  }
}

MatchRequestController.$inject = ['factorsDataService'];
export default MatchRequestController;
