<?php

namespace App;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class EmailVerification extends Model
{
    protected $table = 'email_verifications';

    public static function createCode( $length = 5 )
    {
    	$str = "";
    	$characters = array_merge( range( 'A', 'Z' ), range( 'a', 'z' ), range( '0', '9' ) );
    	$max = count( $characters ) - 1;
    	for ( $i = 0; $i < $length; $i++ )
        {
    		$rand = mt_rand( 0, $max );
    		$str .= $characters[ $rand ];
    	}
    	return $str;
    }

    public static function verfiyEmailUpdateCode( Request $request, User $user, $code )
    {
        $emailVerificationCode = self::where( 'user_id', $user->id )
            ->where( 'code', $code )
            ->first();

        if( !$emailVerificationCode )
        {
            return false;
        }

        $user->email = $request->email;
        $user->save();

        $emailVerificationCode->delete();

        return redirect( 'profile' )
            ->with( 'message', 'Din nya email är verifierad!' );
    }
}
