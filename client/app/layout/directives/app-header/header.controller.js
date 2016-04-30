define(function () {
    function HeaderController (SidebarService, usersService) {
        var _this = this;
        var _user = null;

        this.icon = 'menu';

        this.clickIconMorph = function() {
            SidebarService.toggleSidebar();
        };

        SidebarService.addListener("header", function (isSidebarShown) {
            if(isSidebarShown === true) {
                _this.icon = 'arrow_back';
            } else {
                _this.icon = 'menu';
            }
        });

        usersService.getConnectedUser().then(function (user) {
            _user = user;
            _this.username = user.getUsername();
        });
    }

    HeaderController.$inject = ['SidebarService', 'usersService'];
    return HeaderController;
});
