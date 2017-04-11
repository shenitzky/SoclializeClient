const STATE = new WeakMap();

class MapHandlerController {
  constructor($state,$window,$stateParams,NgMap) {
    STATE.set(this,$state);
    this.matchData = $stateParams.matchData;
    this.name = 'mapHandler';
  }
  
  //GOOGLE MAPS info :)
  // this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
  // this.test1 = 31.8963051;
  // this.test2 = 34.814898899999996;
  // this.test3 = 31.89;
  // this.test4 = 34.81489;
  
  $onInit(){
    this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
  }
}

MapHandlerController.$inject = ['$state','$window','$stateParams','NgMap'];
export default MapHandlerController;
