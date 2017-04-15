/**
 * Created by Yossi on 07/04/2017.
 */
const MATCHDATA_API = new WeakMap();

export class MatchDataService {
  constructor(matchDataApi) {
    MATCHDATA_API.set(this, matchDataApi);
  }
  
  createMatchDataRequest(data) {
    return MATCHDATA_API.get(this).createMatchRequest(data);
  }
  
  updateAndCheckMatchRequest(data) {
    return MATCHDATA_API.get(this).updateAndCheckMatcReq(data);
  }
  
  acceptOptionalMatch(data) {
    return MATCHDATA_API.get(this).acceptOptionalMatch(data);
  }
  
  declineOptionalMatch(data) {
    return MATCHDATA_API.get(this).declineOptionalMatch(data);
  }
  
  getOptionalMatchStatus(optionalMatchId, matchReqId) {
    return MATCHDATA_API.get(this).getOptionalMatchStatus(optionalMatchId, matchReqId);
  }
  
}
MatchDataService.$inject = ['matchDataApi'];
export default MatchDataService;