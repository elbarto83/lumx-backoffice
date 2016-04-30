define(['components/models/User'], function (User) {
       function UserService($log, $q, $http, unitsService, scoutYearService) {

           var _users = {};
           var _connectedUser = null;

           var _deferredUsers =  null;
           var _deferredConnectedUser =  null;

           function _userFactory(type, data) {
               console.log(data);
               var scoutyears = [];
               var unit;
               var options = {
                   id: data.id,
                   username: data.username,
                   email: data.email,
                   firstname: data.firstname,
                   lastname: data.lastname,
                   description: data.description
               };

               if(type === 'fulluser') {
                   $log.debug('The user is a complete user profile view');
                   options.address1 = data.address1;
                   options.address2 = data.address2;
                   options.zipcode  = data.zip_code;
                   options.city     = data.city;
                   options.country  = data.country;
                   options.isAdmin = data.isAdmin;
                   options.lastlogin = data.lastlogin;
                   options.totem = data.totem;
                   options.phonenumber = data.phone_number;

                   if(data.scoutyears !== undefined) {
                       for(var i = 0; i < data.scoutyears.length; i += 1) {
                           if(!unitsService.hasUnit(data.scoutyears[i].unit.id)) {
                               unit = unitsService.createUnit(data.scoutyears[i].unit);
                           } else {
                               unit = unitsService.getUnit(data.scoutyears[i].unit.id);
                           }

                           scoutyears.push(scoutYearService.createScoutYear({
                               id: data.scoutyears[i].id,
                               year: data.scoutyears[i].year,
                               gonecamp: data.scoutyears[i].gone_camp,
                               didpromise: data.scoutyears[i].did_promise,
                               role: data.scoutyears[i].role,
                               unit: unit
                           }));
                       }

                       options.scoutyears = scoutyears;
                   }

               } else if(type === 'publicuser') {
                   $log.debug('The user is a public user profile view');
               } else {
                   throw new Error('Unknow this type of user : ' + type);
               }

               return new User(options);
           }

           //TODO : Handle admin connected user to retrieve all the users data
           function _getUsers () {
               var deferred;

               var onSuccess = function (response) {
                    console.log(response);
                   var users = response.data.users;

                   for(var i = 0; i <  users.length; i += 1) {
                       if(!_users.hasOwnProperty(users[i].username)) {
                           _users[users[i].username] = _userFactory('publicuser', users[i]);
                       }
                   }

                   _deferredUsers = null;
                   deferred.resolve(_users);
               };

               var onError = function () {
                   _deferredUsers = null;
                   $log.error('Application can\'t retrieve the users');
                   deferred.reject();
               };

               // pas user en local
               if(Object.keys(_users).length <= 1) {
                   // pas de promise en cours
                   if(_deferredUsers === null) {
                       _deferredUsers = $q.defer();
                       $http.get('/api/user').then(onSuccess, onError);
                   }

                   deferred = _deferredUsers;

               // user en local
               } else {
                   deferred = $q.defer();
                   deferred.resolve(_users);
               }

               return deferred.promise;
           }

           function _getUser() {

           }

           function _getConnectedUser() {
               var deferred;

               var onSuccess = function (response) {
                  console.log(response);
                   _connectedUser =  response.data.username;
                   _users[_connectedUser] = _userFactory('fulluser', response.data);
                   _deferredConnectedUser = null;
                   deferred.resolve(_users[_connectedUser]);
               };

               var onError = function () {
                   _deferredConnectedUser = null;
                   $log.error('Application can\'t retrieve the connected user');
                   deferred.reject();
               };

               // pas user en local
               if(_connectedUser === null) {
                   // pas de promise en cours
                   if(_deferredConnectedUser === null) {
                       _deferredConnectedUser = $q.defer();
                       $http.get('/app/services/data/me.json').then(onSuccess, onError);
                   }

                   deferred = _deferredConnectedUser;

               // user en local
               } else {
                   deferred = $q.defer();
                   deferred.resolve(_users[_connectedUser]);
               }

               return deferred.promise;
           }

           function _updateCurrentUser() {
               var user = _users[_connectedUser];
               var payload = {
                   user: user.getAddress()
               };

               payload.user.totem = user.getTotem();
               payload.user.phoneNumber = user.getPhoneNumber();
               payload.user.description = user.getDescription();

               return $http.put("/api/me/infos", payload);
           }

           _getConnectedUser();

           return {
               getUsers: _getUsers,
               getConnectedUser: _getConnectedUser,
               updateCurrentUser: _updateCurrentUser,
               getUser: _getUser
           };
       }

    UserService.$inject = ['$log', '$q', '$http', 'unitsService', 'scoutYearService'];
    return UserService;
});
