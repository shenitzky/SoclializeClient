const consts = {
    // userData                 : 'http://socialize20170306063515.azurewebsites.net/api/socializeapi/GetUserData',
    // factors                  : 'http://socialize20170306063515.azurewebsites.net/api/socializeapi/GetAllSystemFactors',
    // updateUserData           : 'http://socialize20170306063515.azurewebsites.net/api/socializeApi/UpdateUserData',
    // createMatcReq            : 'http://socialize20170306063515.azurewebsites.net/api/socializeApi/CreateMatcReq',
    // updateAndCheckMatcReq    : 'http://socialize20170306063515.azurewebsites.net/api/socializeApi/UpdateAndCheckMatcReq',
    // acceptOptionalMatch      : 'http://socialize20170306063515.azurewebsites.net/api/socializeApi/AcceptOptionalMatch',
    // declineOptionalMatch     : 'http://socialize20170306063515.azurewebsites.net/api/socializeApi/DeclineOptionalMatch',
    // getUserImg               : 'http://socialize20170306063515.azurewebsites.net/api/socializeApi/GetUserImgUrl',
    // getOptionalMatchStatus   :(optionalMatchId, matchReqId) => `http://socialize20170306063515.azurewebsites.net/api/socializeApi/CheckOptionalMatchStatus?optionalMatchId=${optionalMatchId}&matchReqId=${matchReqId}`,
    
    
    //
    // userRegister             : 'http://localhost:50825/account/AjaxRegister',
    // userLogin                : 'http://localhost:50825/account/AjaxLogin',
    //
    // userData                 : 'http://localhost:50825/api/socializeapi/GetUserData',
    // factors                  : 'http://localhost:50825/api/socializeapi/GetAllSystemFactors',
    // updateUserData           : 'http://localhost:50825/api/socializeapi/UpdateUserData',
    // createMatcReq            : 'http://localhost:50825/api/socializeApi/CreateMatcReq',
    // updateAndCheckMatcReq    : 'http://localhost:50825/api/socializeApi/updateAndCheckMatcReq',
    // acceptOptionalMatch      : 'http://localhost:50825/api/socializeApi/AcceptOptionalMatch',
    // declineOptionalMatch     : 'http://localhost:50825/api/socializeApi/DeclineOptionalMatch',
    // getUserImg               : 'http://localhost:50825/api/socializeApi/GetUserImgUrl',
    // getOptionalMatchStatus   : ( optionalMatchId , matchReqId) => `http://localhost:50825/api/socializeApi/CheckOptionalMatchStatus?optionalMatchId=${optionalMatchId}&matchReqId=${matchReqId}`,
    // getUserOptionalMatch     : 'http://localhost:50825/api/socializeApi/GetUserOptionalMatch',
    // getReverseGeocoding      : ( latitude ,longitude ) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk`
    //

  
  
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
  getReverseGeocoding      : ( latitude ,longitude ) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk`


  
  
  
};



export default consts;