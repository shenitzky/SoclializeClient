class ChooseHobbiesController {
    constructor() {
      this.name = 'chooseHobbies';
      this.factorsMock = [{'class': 'Sport', 'subclasses': {'name': 'football', 'url': './../../app/common/assets/games.png'}},
                          {'class': 'Hobbies', 'subclasses': {'name': 'gaming', 'url': './../../app/common/assets/games.png'}}];
    }
    
    sendCategoriesToServer(){
        debugger;
    }
    
    test(name){
      debugger;
    }
}

ChooseHobbiesController.$inject = [];
export default ChooseHobbiesController;
