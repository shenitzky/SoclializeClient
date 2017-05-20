/**
 * Created by Yossi on 07/04/2017.
 */

const CONNECTION = new WeakMap();
import apiConsts from '../../../common/const/API'

export class MatchDataApiService {
  
  constructor(connection) {
    CONNECTION.set(this, connection);
  }
  
  createMatchRequest(data) {
    let obj = {data: data,method: 'POST', url: apiConsts.createMatcReq};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  updateAndCheckMatcReq(data) {
    let obj = {data: data,method: 'POST', url: apiConsts.updateAndCheckMatcReq};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  acceptOptionalMatch(data) {
    let obj = {data: data,method: 'POST', url: apiConsts.acceptOptionalMatch};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  declineOptionalMatch(data) {
    let obj = {data: data,method: 'POST', url: apiConsts.declineOptionalMatch};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  getOptionalMatchStatus(optionalMatchId, matchReqId) {
    let obj = {method: 'GET', url: apiConsts.getOptionalMatchStatus(optionalMatchId, matchReqId)};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
}
MatchDataApiService.$inject = ['connection'];
export default MatchDataApiService;