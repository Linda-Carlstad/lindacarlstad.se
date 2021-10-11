const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


if( mix.inProduction() )
{
    mix.js( 'resources/js/app.js', 'public/js/' )
        .sass( 'resources/sass/main.sass', 'public/css' )
        .sass( 'resources/sass/terminal/main.sass', 'public/css/terminal' )
        .sass( 'resources/sass/terminal/normalize.sass', 'public/css/terminal' )
        .version();
}
else
{
    mix.js( 'resources/js/app.js', 'public/js/' )
        .sass( 'resources/sass/main.sass', 'public/css' )
        .sass( 'resources/sass/terminal/main.sass', 'public/css/terminal' )
        .sass( 'resources/sass/terminal/normalize.sass', 'public/css/terminal' );
}