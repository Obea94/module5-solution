(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'ApiPath'];
function MyInfoController(user, ApiPath) {
  var infoCtrl = this;
  infoCtrl.signedUp = false;
  infoCtrl.basePath = ApiPath;

  if(user) {
    infoCtrl.signedUp = true;
    infoCtrl.fName = user.fName;
    infoCtrl.lName = user.lName;
    infoCtrl.email = user.email;
    infoCtrl.phone = user.phone;
    infoCtrl.favItem = user.fullFavItem;
  }
  else {
    infoCtrl.signedUp = false;
  }
}

})();
