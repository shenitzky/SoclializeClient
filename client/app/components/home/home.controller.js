const STATE = new WeakMap();
const WINDOW = new WeakMap();

class HomeController {
    constructor(userDataService,$state,$window) {
        this.name = 'home';
        this.userDataServiceModuleTest = userDataService;
        this.userDataServiceModuleTest.getUserData().then((data)=>{

        });
        STATE.set(this,$state);
        WINDOW.set(this,$window);
    }

    userProfileClick(stateName){
        STATE.get(this).go(stateName);
    }

    getLocation() {
        WINDOW.get(this).navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        });
    }
}


HomeController.$inject = ['userDataService','$state','$window'];
export default HomeController;
