<?php

namespace App\Http\Controllers;

use Auth;
use App\EmailVerification;
use App\Mail\EmailVerfied;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

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
            $result = EmailVerification::verfiyEmailUpdateCode( $request, $user, $code );
        }
        else
        {
            $result = [ 'error' => 'Email kunde inte verifieras, vänligen försök igen.' ];
        }

        if ( !isset( $result[ 'success' ] ) )
        {
            redirect( 'profile' )->with( 'error', $result['error']);
        }


        Mail::to( $user->email )
            ->send( new \App\Mail\EmailVerified( $user ) );
        return redirect( 'profil' )->with( 'success', 'Ny email är verifierad!' );
    }
}
