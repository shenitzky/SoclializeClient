class MapHandlerController {
  constructor($state,$window,$stateParams,NgMap) {
    this.name = 'mapHandler';
    debugger;
  }
  
  $onInit(){
    //todo make a promise only when all data is ready generate the map
    
    
    
    this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
  }
  

  
  
}

MapHandlerController.$inject = ['$state','$window','$stateParams','NgMap'];
export default MapHandlerController;
