const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const WINDOW = new WeakMap();
const MATCH_DATA_SERVICE = new WeakMap();
const Q = new WeakMap();

class MapHandlerController {
  constructor($state,$window,$stateParams,NgMap,userDataService,matchDataService,$q) {
    USER_DATA_SERVICE.set(this,userDataService);
    WINDOW.set(this,$window);
    STATE.set(this,$state);
    Q.set(this, $q);
    MATCH_DATA_SERVICE.set(this,matchDataService);
    this.matchData = $stateParams.matchData;
    this.viewReady = false;
    this.name = 'mapHandler';
    this.gMap = NgMap;
  }
 
  //Init with API key
  $onInit(){
    this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk";
    this._reverseGeocoding();
  }
  
  
  //Reverse locations to address
  _reverseGeocoding(){
    Q.get(this)
      .all([
        MATCH_DATA_SERVICE.get(this).getReverseGeocoding(this.matchData.locations[0].lat,this.matchData.locations[0].lng),
        MATCH_DATA_SERVICE.get(this).getReverseGeocoding(this.matchData.locations[1].lat,this.matchData.locations[1].lng)
      ])
      .then(([userLocationOne, userLocationTwo])=>{
        this.firstUserLocation = _.get(userLocationOne.data,'results[0].formatted_address',null);
        this.secUserLocation   = _.get(userLocationTwo.data,'results[0].formatted_address',null);
        this.secUserImage      = _.get(this.matchData,'matchedImgUrl',null);
        this.myImageUrl        = _.get(this.matchData,'myImgUrl',null);
      })
      .finally(()=>this.viewReady = true);
  }
}

MapHandlerController.$inject = ['$state','$window','$stateParams','NgMap','userDataService','matchDataService','$q'];
export default MapHandlerController;
