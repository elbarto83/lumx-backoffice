define(function () {
    function Controller(Sidebar, usersService) {
        var _this = this;
        this.isShow = false;

        usersService.getConnectedUser().then(function(user) {
            if(user.isAdmin() === true) {
                _this.admin = true;
            }
        });

        this.hidesidebar = function () {
            Sidebar.hideSidebar();
        }

        Sidebar.addListener('navbar', function (isSidebarShow) {
            _this.isShow = isSidebarShow;
        });
    }

    Controller.$inject = ['SidebarService', 'usersService'];
    return Controller;
});