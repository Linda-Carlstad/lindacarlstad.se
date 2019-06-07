<?php

namespace App\Http\Controllers;

use App\Partner;

use Illuminate\Http\Request;

class FetchIndexView extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $sponsors = Partner::where( 'type', 'Sponsor' )->where( 'frontPage', '1' )->orderBy( 'started', 'asc' )->get();

        return view( 'index' )->with( 'sponsors', $sponsors );
    }
}
