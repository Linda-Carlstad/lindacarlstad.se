<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserVerification extends Model
{
    protected $table = 'user_verifications';

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
            ->with( 'message', 'Success!' );
    }
}
