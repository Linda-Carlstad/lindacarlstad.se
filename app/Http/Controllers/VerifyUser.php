<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VerifyUser extends Controller
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
        $token = $request->token;

        $codeExists = EmailVerification::where( 'user_id', $user->id )
            ->where( 'code', $token )
            ->exists();

        if ( $codeExists )
        {
            EmailVerification::verfiyEmailUpdateCode( $request, $user, $token );

            return view( 'emailverified' );
        }
    }
}
