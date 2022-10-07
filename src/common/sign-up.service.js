(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  var savedData;

  // service.getCategories = function () {
  //   return $http.get(ApiPath + '/categories.json').then(function (response) {
  //     return response.data;
  //   });
  // };


  service.getItem = function (menuNumber) {
    // console.log(menuNumber);

    return $http.get(ApiPath + '/menu_items/' + menuNumber + '.json')
      .then(function (response) {
        // console.log(response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  service.setUserInfo = function(user, fullFavItem) {
    // console.log('setUserInfo', user, fullFavItem);
    savedData = {
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      phone: user.phone,
      favItem: user.favItem,
      fullFavItem: fullFavItem
    }
  };

  service.getUserInfo = function() {
    // console.log('getUserInfo', savedData);
    return savedData;
  };
}



})();
