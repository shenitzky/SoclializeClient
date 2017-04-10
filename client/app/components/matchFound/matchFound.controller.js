const STATE = new WeakMap();

class MatchFoundController {
  constructor($stateParams,$state) {
    STATE.set(this,$state);
    this.optionalMatch = _.get($stateParams,'optionalMatch');
    this.time = _.get($stateParams,'time');
    this.date = _.get($stateParams,'date');
    this.chipsArray = [];
  }
  
  $onInit(){
    _.forEach(this.optionalMatch.matchedDetails.description, (chips)=>{
      this.chipsArray.push(_.split(chips,','));
    });
    //todo remove this when server will remove duplicate
    this.chipsArray[2][3]='yossi';
    debugger;
  }
  
}

MatchFoundController.$inject = ['$stateParams','$state'];
export default MatchFoundController;
