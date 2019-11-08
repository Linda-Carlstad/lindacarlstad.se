<?php

namespace App\Http\Controllers;

use App\Mail\Contact;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

class ContactForm extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke( Request $request )
    {
        $request->validate( [
            'name'    => 'required|string|max:255',
            'subject' => 'required|string',
            'email'   => 'required|email',
            'message' => 'required|string',
        ] );

        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = [
            'secret'   => env( 'GOOGLE_RECAPTCHA_SECRET' ),
            'response' => $request->recaptcha
        ];

        $options = [
            'http' => [
                'header'  => 'Content-type: application/x-www-form-urlencoded\r\n',
                'method'  => 'POST',
                'content' => http_build_query( $data )
            ]
        ];

        $context = stream_context_create( $options );
        $result = file_get_contents( $url, false, $context );
        $json = json_decode( $result );

        if( $json->success != true )
        {
            return back()->with( 'error', 'Capatcha fel!' );
        }

        Mail::to( 'info@lindacarlstad.se' )
            ->send( new Contact( $request ) );
    }
}
