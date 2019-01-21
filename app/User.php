<?php

namespace App;

use Auth;
use View;
use Session;

use App\User;
use App\EmailVerification;
use App\Mail\PasswordChange;
use App\Mail\EmailVerificationWithCode;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'idNumber', 'verified', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
     protected $table = 'users';


    public function exams()
    {
        return $this->hasMany( 'App\Exam' );
    }

    public static function changeName( Request $request, User $user)
    {

        $request->validate([
            'name'=>'required|string|max:255'
         ]);

         $user->name=$request->name;
         $user->save();
         return [
             'success'=>'Användarnamnet är nu ändrat'
         ];
        }
    public static function changePassword( Request $request, User $user )
    {
        $request->validate( [
            'currentPassword' => 'required|string',
            'password'        => 'required|string|min:6|different:currentPassword',
            'confirmPassword' => 'required|string|same:password',
        ] );
        if( Hash::check( $request->currentPassword, $user->password ) )
        {
            $user->password = Hash::make( $request->password );
            $user->save();

            Mail::to( $user->email )
                ->send( new PasswordChange( $user ) );
            return [ 'success' => 'Du har ändrat ditt lösenord!' ];
        }
        return [ 'error' => 'Gammalt lösenord är inte korrekt!' ];
    }

    public static function changeEmail( Request $request, User $user )
    {
        $request->validate( [
            'email'         => 'required|string|email|unique:users,email|max:255',
            'emailPassword' => 'required',
        ] );

        $email = $request->email;
        $code  = EmailVerification::createCode();

        $emailVerification          = new EmailVerification;
        $emailVerification->code    = $code;
        $emailVerification->user_id = $user->id;
        $emailVerification->save();

        Mail::to( $request->email )
            ->send( new EmailVerificationWithCode( $user, $code, $email ) );

        return [ 'success' => 'New email have been registered and verification mail have been sent.',
            'result' => $request->email ];
    }
}
