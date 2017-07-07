const STATE = new WeakMap();
const WINDOW = new WeakMap();
const ROOTSCOPE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const ELEMENT = new WeakMap();
const FACTOR_DATA_SERVICE = new WeakMap();

class HomeController {
  constructor(userDataService, $state, $window,$rootScope,factorsDataService,$element) {
    USER_DATA_SERVICE.set(this, userDataService);
    this.viewReady = false;
    this.viewReady = true;
    STATE.set(this, $state);
    WINDOW.set(this, $window);
    ROOTSCOPE.set(this, $rootScope);
    FACTOR_DATA_SERVICE.set(this, factorsDataService);
    ELEMENT.set(this, $element);
  }
  
  $onInit() {
    STATE.get(this).go('matchRequest');
  }
  
//
//   $onInit() {
//
//     //Working faceBook login init
//     WINDOW.get(this).fbAsyncInit = (()=>{
//       FB.init({
//         appId      : '225116571322642',
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v2.8'
//       });
//       FB.AppEvents.logPageView();
//       this.faceBookLoginEvent();
//     });
//
//     (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "//connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//
//     //Google bind function to this
//     WINDOW.get(this).onSignIn = this.onSignIn.bind(this);
//   }
//
//   //Working FaceBook login status
//   faceBookLoginEvent(){
//     FB.getLoginStatus(function(response) {
//       FB.login();
//       //statusChangeCallback(response);
//     });
//   }
//
//
//   //Working google sign in
//   onSignIn(googleUser) {
//     // Useful data for your client-side scripts:
//     var profile = googleUser.getBasicProfile();
//     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log("Image URL: " + profile.getImageUrl());
//     console.log("Email: " + profile.getEmail());
//
//     // The ID token you need to pass to your backend:
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log("ID Token: " + id_token);
//   }
//
//
//   //Working Google sign out
//   signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }

}

HomeController.$inject = ['userDataService', '$state', '$window','$rootScope','factorsDataService','$element'];
export default HomeController;
