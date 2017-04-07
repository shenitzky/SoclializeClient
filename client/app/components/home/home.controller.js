const STATE = new WeakMap();
const WINDOW = new WeakMap();

class HomeController {
    constructor(userDataService,$state,$window,NgMap) {
        this.name = 'home';
        this.userDataServiceModuleTest = userDataService;
        //this.googleMap = googleMaps;
        //this.googleMap.createClient({key: 'AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk'});
        this.viewReady = false;
        
        //todo GOOGLE MAPS :)
        this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
        this.test1 = 31.8963051;
        this.test2 = 34.814898899999996;
        this.test3 = 31.89;
        this.test4 = 34.81489;
  
        setInterval(()=>{console.log("Hello pasta")}, 1000);
        
        this.viewReady = true;
        this.testMap = NgMap;
        
        //todo END GOOGLE MAPS :)
      
      
      
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


HomeController.$inject = ['userDataService','$state','$window','NgMap'];
export default HomeController;
