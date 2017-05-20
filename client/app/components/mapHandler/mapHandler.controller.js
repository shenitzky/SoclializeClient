const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const WINDOW = new WeakMap();
const ROOTSCOPE = new WeakMap();

class MapHandlerController {
  constructor($state,$window,$stateParams,NgMap,userDataService,$rootScope) {
    USER_DATA_SERVICE.set(this,userDataService);
    WINDOW.set(this,$window);
    STATE.set(this,$state);
    ROOTSCOPE.set(this, $rootScope);
    this.matchData = $stateParams.matchData;
    this.name = 'mapHandler';
    this.gMap = NgMap;
  }
  
  //GOOGLE MAPS info :)
  // this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
  // this.test1 = 31.8963051;
  // this.test2 = 34.814898899999996;
  // this.test3 = 31.89;
  // this.test4 = 34.81489;
  
  $onInit(){
    let geocoder = new google.maps.Geocoder();
    this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
    //var tr = WINDOW.get(this).google;
    //this.geocodder = this.gMap;
    this._getUserImg();

  }
  
  _getUserImg(){
    USER_DATA_SERVICE.get(this).getUserImg().then((userImg) =>{
      this.userImg = _.get(userImg,'data');
      this.viewReady = true;
    });
  }
  
}

MapHandlerController.$inject = ['$state','$window','$stateParams','NgMap','userDataService','$rootScope'];
export default MapHandlerController;
