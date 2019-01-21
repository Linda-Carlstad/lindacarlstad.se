<?php

namespace App\Http\Controllers;

use Auth;
use App\EmailVerification;
use Illuminate\Http\Request;

class VerifyNewEmail extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke( Request $request )
    {
        $user = Auth::user();
        $code = $request->code;

        $codeExists = EmailVerification::where( 'user_id', $user->id )
            ->where( 'code', $code )
            ->exists();

        if ( $codeExists )
        {
            EmailVerification::verfiyEmailUpdateCode( $request, $user, $code );
            return view( 'verifierad-email' );
        }
    }
}
