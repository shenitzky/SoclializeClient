const consts = {
  
    // userRegister            : 'http://localhost:50825/account/AjaxRegister',
    // userLogin               : 'http://localhost:50825/account/AjaxLogin',
    //
    // userData                : 'http://localhost:50825/api/socializeapi/GetUserData',
    // factors                 : 'http://localhost:50825/api/socializeapi/GetAllSystemFactors',
    // updateUserData          : 'http://localhost:50825/api/socializeapi/UpdateUserData',
    // createMatcReq           : 'http://localhost:50825/api/socializeApi/CreateMatcReq',
    // updateAndCheckMatcReq   : 'http://localhost:50825/api/socializeApi/updateAndCheckMatcReq',
    // acceptOptionalMatch     : 'http://localhost:50825/api/socializeApi/AcceptOptionalMatch',
    // declineOptionalMatch    : 'http://localhost:50825/api/socializeApi/DeclineOptionalMatch',
    // getUserImg              : 'http://localhost:50825/api/socializeApi/GetUserImgUrl',
    // getOptionalMatchStatus  : ( optionalMatchId , matchReqId) => `http://localhost:50825/api/socializeApi/CheckOptionalMatchStatus?optionalMatchId=${optionalMatchId}&matchReqId=${matchReqId}`,
    // getUserOptionalMatch    : 'http://localhost:50825/api/socializeApi/GetUserOptionalMatch',
    // getReverseGeocoding     : ( latitude ,longitude ) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk`,
    // updateUserExtraData     : 'http://localhost:50825/api/socializeApi/UpdateUserExtraData',
    // getImagesForBubble      : 'http://localhost:50825/api/socializeapi/GetImagesForBubble',
    // addDynamicFactor        :  ( dynamicFactor) => `http://localhost:50825/api/socializeApi/SuggestNewSubClass?newSubClassDesc=${dynamicFactor}`,
    // removeDynamicFactor     :  ( dynamicFactorRemove) => `http://localhost:50825/api/socializeApi/ReduceSuggestNewSubClass?newSubClassDesc=${dynamicFactorRemove}`
  
  userRegister             : '/account/AjaxRegister',
  userLogin                : '/account/AjaxLogin',
  userData                 : '/api/socializeapi/GetUserData',
  factors                  : '/api/socializeapi/GetAllSystemFactors',
  updateUserData           : '/api/socializeapi/UpdateUserData',
  createMatcReq            : '/api/socializeApi/CreateMatcReq',
  updateAndCheckMatcReq    : '/api/socializeApi/updateAndCheckMatcReq',
  acceptOptionalMatch      : '/api/socializeApi/AcceptOptionalMatch',
  declineOptionalMatch     : '/api/socializeApi/DeclineOptionalMatch',
  getUserImg               : '/api/socializeApi/GetUserImgUrl',
  getOptionalMatchStatus   : (optionalMatchId,matchReqId) => `/api/socializeApi/CheckOptionalMatchStatus?optionalMatchId=${optionalMatchId}&matchReqId=${matchReqId}`,
  getUserOptionalMatch     : '/api/socializeApi/GetUserOptionalMatch',
  getReverseGeocoding      : ( latitude ,longitude ) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk`,
  updateUserExtraData      : '/api/socializeApi/UpdateUserExtraData',
  getImagesForBubble       : '/api/socializeApi/GetImagesForBubble',
  addDynamicFactor         :  ( dynamicFactor) => `/api/socializeApi/SuggestNewSubClass?newSubClassDesc=${dynamicFactor}`,
  removeDynamicFactor      :  ( dynamicFactorRemove) => `/api/socializeApi/ReduceSuggestNewSubClass?newSubClassDesc=${dynamicFactorRemove}`
};



export default consts;