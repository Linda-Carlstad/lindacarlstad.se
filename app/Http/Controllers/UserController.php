<?php

namespace App\Http\Controllers;

use Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit( Request $request )
    {
        return view( 'user.edit' );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update( Request $request, $id )
    {
        $user = User::find( $id );
        $this->authorize( 'update', Auth::user(), $user );

        switch ( $request->type )
        {
            case 'name':
                $result = User::changeName( $request, $user);
                break;

            case 'password':
                $result = User::changePassword( $request, $user );
                break;

            case 'email':
                $result = User::changeEmail( $request, $user );
                break;

            default:
                $result = [ 'error' => 'Något gick fel.' ];
                break;
        }

        if ( !isset( $result[ 'success' ] ) )
        {
            return redirect()->back()->with('error', $result[ 'error' ]);
        }
        //Session::flash('success',$reuslt['success']);
        return redirect()->back()->with( 'success', $result['success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
