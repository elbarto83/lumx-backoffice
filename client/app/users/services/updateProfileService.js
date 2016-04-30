
/**
 * Created by jeremi on 10/04/2016.
 */
define(function () {
    function Service(usersService, LxDialogService) {
        var dialogId = 'user-profile-dialog';
        var user;
        var service = {
            updateProfile: updateProfile
        };

        usersService.getConnectedUser().then(function (_user) {
            user = _user;
        });

        function updateProfile() {
            LxDialogService.open(dialogId);
        }
        return service;
    }

    Service.$inject = ['usersService', 'LxDialogService'];
    return Service;
});