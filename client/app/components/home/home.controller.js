const STATE = new WeakMap();
const WINDOW = new WeakMap();

class HomeController {
    constructor(userDataService,$state,$window,googleMaps) {
        this.name = 'home';
        this.userDataServiceModuleTest = userDataService;
        //this.googleMap = googleMaps;
        //this.googleMap.createClient({key: 'AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk'});
      
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


HomeController.$inject = ['userDataService','$state','$window','googleMaps'];
export default HomeController;
