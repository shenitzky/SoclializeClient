
const SPORT = 'Sport';
const GAMEMING = 'Gamming';



class UserProfileController {
    constructor(factorsDataService) {
        this.name = 'userProfile';
        this.factorsData = factorsDataService;
    }

    $onInit(){
        //todo move to const categories
        this.sport = [];
        this.gamming = [];
        this.factorsData.getFactorData().then((data)=>{
            data = data.data;
            console.log("data",data);
            _.forEach(data, (category) => {
                if(category.class === SPORT){
                    console.log(category.subClasses);
                    this.sport.push(category.subClasses)
                }
                if(category.class === GAMEMING){
                    console.log(category.subClasses);
                    this.gamming.push(category.subClasses);
                }
            });
            console.log("this.sport",this.sport);
        })
    }

    onCheckBoxChange(index,category,categoryClass){
        debugger;
    }

}


UserProfileController.$inject = ['factorsDataService'];
export default UserProfileController;
