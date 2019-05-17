<?php

namespace App\Http\Controllers;

use App\BoardMember;
use Illuminate\Http\Request;

class FetchBoardMembers extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $boardMembers = BoardMember::orderBy( 'id', 'asc' )->get();

        return view( 'about' )->with( 'boardMembers', $boardMembers );
    }
}
