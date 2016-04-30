define(function () {
    function Controller(usersService, LxDialogService, LxNotificationService) {
        var _this = this;

        _this.userObject = {
            firstname: null,
            lastname: null,
            phonenumber: null,
            email: null,
            description: null,
            address: {
                address1: null,
                address2: null,
                zipcode: null,
                city: null,
                country: null,
            },
            totem: {
                totem: null,
                adj : null
            }
        };

        _this.fullview = true;

        function fillUserObject (user) {
            _this.userObject.email = user.getEmail();
            _this.userObject.username = user.getUsername();
            _this.userObject.firstname = user.getFirstname();
            _this.userObject.lastname = user.getLastname();
            _this.userObject.phonenumber = user.getPhoneNumber();
            _this.userObject.description = user.getDescription();
            _this.userObject.address = user.getAddress();
            _this.userObject.totem = user.getFormattedTotem();

            _this.userObject.scoutyears = [];

            if(user.getScoutYears().length > 0) {
                var sy = user.getScoutYears();
                for(var i = 0; i < sy.length; i += 1) {
                    _this.userObject.scoutyears.push({
                        year:  sy[i].getYear(),
                        unitname: sy[i].getUnitname(),
                        didpromise: sy[i].getDidPromise(),
                        gonecamp: sy[i].getGoneCamp(),
                        role: sy[i].getRole()
                    });
                }
            }

            console.log(_this.userObject);
        }

        usersService.getConnectedUser().then(function (user) {
            _this.user = user;
            fillUserObject(user);
        });

        this.updateUser = function () {
            _this.user.setAddress(_this.userObject.address);
            _this.user.setTotem(_this.userObject.totem);
            _this.user.setDescription(_this.userObject.description);
            _this.user.setPhoneNumber(_this.userObject.phonenumber);

            usersService.updateCurrentUser().then(function () {
                LxNotificationService.success('Profil mis à jour');
            });
        };

        this.discardChanges = function () {
            LxNotificationService.confirm('Confirmation', 'Êtes-vous sur de vouloir annuler les modifications ?',
                {
                    cancel: 'Non',
                    ok: 'Oui'
                }, function(answer)
                {
                    if (answer) {
                        fillUserObject(_this.user); // gp back to the server state :)
                    } else {
                        LxDialogService.open('user-profile-dialog');
                    }
                });
        };
    }

    Controller.$inject = ["usersService", 'LxDialogService', 'LxNotificationService'];

    return Controller;
});