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

//Auth::routes( [ 'verify' => true ] );

Route::get( '/', function ()
{
    return view( 'index' );
});


Route::get( 'kalender', function ()
{
    return view( 'calendar' );
})->name( 'calendar' );

Route::get( 'integritetspolicy', function ()
{
    return view( 'policy' );
})->name( 'policy' );


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


Route::get( 'support', function()
{
    return view( 'support' );
} )->name( 'support' );

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
})->name( 'contact' );


Route::get( 'nollning/regler', function()
{
    return view( 'initiation.rules' );
})->name( 'initiation.rules' );

Route::get( 'program', function()
{
    return view( 'programs.index' );
})->name( 'programs' );

Route::get( 'program/högskoleingenjör-i-datateknik', function()
{
    return view( 'programs.data' );
})->name( 'data' );

Route::get( 'program/it-design-affärssystem-och-ekonomi', function()
{
    return view( 'programs.business' );
})->name( 'business' );

Route::get( 'program/it-design-systemdesign', function()
{
    return view( 'programs.system' );
})->name( 'system' );

Route::get( 'program/kandidatprogram-i-datavetenskap', function()
{
    return view( 'programs.candidate' );
})->name( 'candidate' );

Route::get( 'program/webbutvecklare', function()
{
    return view( 'programs.webb' );
})->name( 'webb' );

Route::get( 'program/master/masterprogram-i-datavetenskap', function()
{
    return view( 'programs.master.data' );
})->name( 'master.data' );

Route::get( 'program/master/masterprogram-i-informatik', function()
{
    return view( 'programs.master.info' );
})->name( 'master.info' );

Route::get( 'program/civilingenjör-i-datateknik', function()
{
    return view( 'programs.civil' );
})->name( 'civil' );

/* Email */
Route::get( 'verifiering-profil', 'VerifyUser' );
Route::get( 'verifiering-email', 'VerifyNewEmail' );

/* Kontaktformulär */
Route::post( '/contactForm', 'ContactForm' );

/* Hämtar data */
Route::get( 'nyheter', 'FetchFacebookPosts' )->name( 'news' );
Route::get( 'nollning', 'FetchBlogPosts' )->name( 'initiation' );
Route::get( 'tentor', 'ExamController@index' )->name( 'tentor' );
Route::get( 'föreningen', 'FetchBoardMembers' )->name( 'about' );
Route::get( 'nollning/schema', 'InitiationDaysController@index' )->name( 'initiation.schedule' );
Route::get( 'nollning/schema/{slug}', 'InitiationDaysController@show' )->name( 'initiation.show' );

Route::group( [ 'middleware' => 'verified' ], function ()
{
    Route::get( 'profil', 'UserController@edit' )->name( 'profile' );

    Route::resources( [
        'user' => 'UserController',
        'exam' => 'ExamController',
    ] );
} );
