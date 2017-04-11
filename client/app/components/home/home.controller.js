const STATE = new WeakMap();
const WINDOW = new WeakMap();

class HomeController {
    constructor(userDataService,$state,$window) {
        this.userDataServiceModuleTest = userDataService;
        this.viewReady = false;
        this.viewReady = true;
        STATE.set(this,$state);
        WINDOW.set(this,$window);
    }

    changeStateNameOnClick(stateName){
        STATE.get(this).go(stateName);
    }

    getLocation() {
        WINDOW.get(this).navigator.geolocation.getCurrentPosition((position)=>{
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            console.log("latitude:",this.latitude);
            console.log("longitude:",this.longitude);
        },error=>{console.log(error)});
    }
}


HomeController.$inject = ['userDataService','$state','$window'];
export default HomeController;
