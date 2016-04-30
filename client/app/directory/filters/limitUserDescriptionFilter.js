/**
 * Created by jeremi on 07/04/2016.
 */
define(function () {
    function filter() {
        var DESCRIPTION_LENGTH = 150;
        return function (description) {
            var content = "";
            if(description === undefined || description.length < DESCRIPTION_LENGTH) {
                content = description;
            } else {
                for(var i = 0; i < DESCRIPTION_LENGTH -  3; i += 1) {
                    content += description[i];
                }

                content += '...';
            }

            return content;
        };
    }

    filter.$inject = [];
    return filter;
});