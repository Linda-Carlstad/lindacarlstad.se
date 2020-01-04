<?php

namespace App\Http\Controllers;

use App\Song;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request )
    {
        $total = Song::all()->count();

        if( isset( $request->search ) )
        {
            $search = $request->search;

            $songs = Song::where( 'secret', 0 )
                ->orWhere( 'title', 'LIKE', '%' . $search . '%' )
                ->orWhere( 'melody', 'LIKE', '%' . $search . '%' )
                ->orWhere( 'text', 'LIKE', '%' . $search . '%' );

            $totalSearch = $songs->count();
            $songs = $songs->simplePaginate( 10 );

            return view( 'song.index' )
                ->with( 'songs', $songs->appends( Input::except( 'page' ) ) )
                ->with( 'search', $search )
                ->with( 'total', $total )
                ->with( 'totalSearch', $totalSearch );
        }

        $songs = Song::where( 'secret', 0 )->orderBy('title', 'asc')->simplePaginate( 10 );

        return view( 'song.index' )->with( 'songs', $songs )->with( 'total', $total );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort( 404 );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        abort( 403 );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show( $slug )
    {
        $song = Song::where('slug', $slug)->first();

        if( $song->secret === 1 )
        {
            if( !session()->exists('_secret') )
            {
                session()->flash( 'error', 'För att se de hemliga sångerna, måste du ha en kod, rätt kod.' );
                return view( 'song.gate' );
            }
        }
        return view( 'song.show' )->with( 'song', $song );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function gate()
    {
        if( session()->exists('_secret') )
        {
            $songs = Song::where( 'secret', 1 )->get();

            return view( 'song.secret' )->with( 'songs', $songs );
        }

        return view( 'song.gate' );
    }

    public function secret( Request $request )
    {
        $code = 'LindaCarlstad' . date( 'Y' );
        if( $request->code == $code )
        {
            session(['_secret' => true]);
            $songs = Song::where( 'secret', 1 )->get();

            return view( 'song.secret' )->with( 'songs', $songs );
        }
        else {
            return redirect()->back()->with( 'error', 'För att se de hemliga sångerna, måste du ha en kod, rätt kod.' );
        }

    }

    public function edit($id)
    {
        abort( 404 );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        abort( 403 );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        abort( 403 );
    }
}
