<?php

namespace App\Http\Controllers;

use App\Event;
use App\Initiation;
use App\Partner;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;

use Jenssegers\Agent\Agent;

class FetchIndexView extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return Application|Factory|View
     */
    public function __invoke(Request $request)
    {
        $sponsors = Partner::where( 'type', 'Sponsor' )->where( 'frontPage', '1' )->orderBy( 'started', 'asc' )->get();
        $events = Event::where( 'active', 1 )->get();
        $initiation = Initiation::where( 'active', true )->latest()->first();
        $agent = new Agent();

        session()->forget( [ '_flash', 'event', 'initiation' ] );

        foreach( $events as $event )
        {
            session()->push('event', $event);
        }
        session()->put( 'initiation', $initiation->year );

        return view( 'index' )->with( 'sponsors', $sponsors )
            ->with( 'events', $events )->with( 'initiation', $initiation )->with( 'uaIsDesktop', $agent->isDesktop() );
    }
}
