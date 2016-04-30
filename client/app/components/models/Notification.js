define(function () {
    function Notification(options) {
        var _type = options.type;
        var _id = options.id;
        var _isnew = options.isnew||false;
        var _content = options.content;

        var _toupdate = false; // set the flag true if you need to update the notification

        function getId() {
            return _id;
        }

        function getContent() {
            return _content;
        }

        function isNew() {
            return _isnew;
        }

        function getType() {
            return _type;
        }

        function setRead() {
            if(_isnew === true) {
                _isnew = false;
                _toupdate = true;
            }
        }

        function toUpdate() {
            return _toupdate;
        }

        return {
            getId: getId,
            getContent: getContent,
            isNew: isNew,
            setRead: setRead,
            getType: getType,
            toUpdate: toUpdate
        };
    }
    return Notification;
});