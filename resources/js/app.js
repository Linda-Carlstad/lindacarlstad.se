window.$ = require('jquery');

$(document).ready(function() {

    require('bootstrap');
    require('javascript-terminal');
    require('typed');
    require('slick-carousel');
    require('ga-lite');
    require('cookieconsent');

    require('./modules/ga-lite');
    require('./modules/cookieconsent');
    require('./modules/hotjar');

    require('./components/terminal');
    require('./components/error');
});