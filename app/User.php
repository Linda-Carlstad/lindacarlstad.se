<?php

namespace App;

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
        'name', 'id_number', 'verified', 'email', 'password',
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
            'oldPassword' => 'required|string',
            'password'        => 'required|string|min:6|different:oldPassword',
            'confirmPassword' => 'required|string|same:password',
        ] );

        if( Hash::check( $request->oldPassword, $user->password ) )
        {
            $user->password = Hash::make( $request->password );
            $user->save();

            Mail::to( $user->email )
                ->send( new PasswordChange( $user ) );
            return [ 'success' => 'Your password has been changed!' ];
        }
        return [ 'error' => 'Old passwordis not correct.' ];
    }
}
