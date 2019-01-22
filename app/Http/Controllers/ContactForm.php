<?php

namespace App\Http\Controllers;

use App\Mail\UserVerified;

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

        Mail::to( env( 'MAIL_FROM_ADDRESS' ) )
            ->send( new UserVerified( $request ) );
    }
}
