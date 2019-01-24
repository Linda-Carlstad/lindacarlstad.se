<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get( '/', function ()
{
    return view( 'index' );
});

Route::get( 'om-föreningen', function ()
{
    return view( 'about' );
})->name( 'about' );

Route::get( 'kalender', function ()
{
    return view( 'calendar' );
})->name( 'calendar' );


Route::get( 'dokument', function ()
{
    return view( 'document' );
})->name( 'document' );


Route::get( 'evenemang', function ()
{
    return view( 'events' );
})->name( 'events' );


Route::get( 'ny-medlem', function ()
{
    return view( 'new-member' );
})->name( 'new-member' );


Route::get( 'nyheter', function ()
{
    return view( 'news' );
})->name( 'news' );

Route::get( 'hemlighet', function ()
{
    return view( 'secret' );
})->name( 'secret' );

Route::get( 'webbshop', function ()
{
    return view( 'store' );
})->name( 'store' );

Route::get( 'whoops', function ()
{
    return view( 'whoops' );
});

Route::get( 'kontakt', function()
{
    return view( 'contact' );
})->name('contact');

Route::get( 'nollning', function()
{
    return view( 'initiation' );
})->name('initiation');

Route::get('profil', function () {
    return view( 'user.edit' );
})->name('profile');

Route::name('exam.')->group(function (){
    Route::get('tentor', 'ExamController@index')->name('index');
});
