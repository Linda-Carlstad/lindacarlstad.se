<?php

namespace App\Http\Controllers;

use App\Event;
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
        $events = Event::where( 'active', 1 )->get();
        session()->flush();
        foreach( $events as $event )
        {
            session()->push('event', $event);
        }

        return view( 'index' )->with( 'sponsors', $sponsors )->with( 'events', $events );
    }
}
