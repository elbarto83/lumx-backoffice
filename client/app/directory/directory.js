define(function () {
        function Controller(usersService) {
            var _this = this;
            this.users = [];

            usersService.getUsers().then(function (users) {
                _users = [];

               for(var user in users) {
                   _users.push({
                       username: users[user].getUsername(),
                       fullname: users[user].getFullname(),
                       formattedtotem: users[user].getFormattedTotem(),
                       description: users[user].getDescription()
                   });
               }

                _this.users = _users;
            });
        }

    Controller.$inject = ['usersService'];
    return Controller;
});