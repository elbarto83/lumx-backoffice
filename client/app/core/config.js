/**
 * Created by jeremi on 04/04/2016.
 */
define(function () {
    function config(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            v: '3.22', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    }

    config.$inject = ['uiGmapGoogleMapApiProvider'];
    return config;
});