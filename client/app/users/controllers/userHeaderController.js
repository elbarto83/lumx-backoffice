define(function () {
    function Controller(updateProfileService) {
        this.updateProfile = function () {
            console.log(updateProfileService);
            updateProfileService.updateProfile();
        };

    }

    Controller.$inject = ['updateProfileService'];
    return Controller;
});