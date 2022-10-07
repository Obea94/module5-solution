(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var reg = this;
  reg.itemError = false;
  reg.user = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    favItem: ""
  };
  reg.fullFavItem;

  reg.submit = function () {
    // console.log('nel SignUpController');
    // console.log(reg.user.favItem);
    reg.itemError = false;

    // reg.risposta =
    var promise = SignUpService.getItem(reg.user.favItem.toUpperCase());

    promise.then(function (response) {
      reg.fullFavItem = response;
      // console.log(reg.fullFavItem);
      reg.completed = true;
      reg.itemError = false;
      SignUpService.setUserInfo(reg.user, reg.fullFavItem);
    })
    .catch(function (error) {
      console.log(error);
      reg.itemError = true;
      reg.completed = false;
    })

  };
}

})();
