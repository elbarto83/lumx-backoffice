define(["angular"], function (angular) {
    var baseurl = "http://localhost:8000";
    var client_id = "1_3tkg46xszgysswsowkwo4oow0wgcsgkcg4gks0kk08kk0swk0s";
    var client_secret = "51iuu1y44vgo0cowgs84sogkc8g8okogw8ko4ow00s4kgkgks0";
    var scope = "users cocktails";
    var grant_type = "password";
    var username = "admin";
    var password = "admin";

    angular.module("common.constants", [])
        .constant("ConfigServer", {
            host: baseurl
        })
        .constant("Oauth2", {
            token_url: baseurl + "/oauth/v2/token",
            client_id: client_id,
            client_secret: client_secret,
            scope: scope,
            grant_type: grant_type,
            username: username,
            password: password
        })
        .constant("UserApi", {
            url: baseurl + "/api/users",
            getUrl: function (id) {
                return baseurl + "/api/users/" + id;
            }
        })
        .constant("CocktailApi", {
            url: baseurl + "/api/cocktails",
            getUrl: function (id) {
                return baseurl + "/api/cocktails/" + id;
            }
        });
});
