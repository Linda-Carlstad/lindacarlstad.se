<?php

namespace App\Http\Controllers;

use App\Initiation;
use App\InitiationDay;
use App\InitiationKeyPerson;

use Illuminate\Http\Request;

class InitiationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $initiations = Initiation::all();

        return view( 'initiation.index' )->with( 'initiations', $initiations );
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
    public function show( $year )
    {
        $initiation = Initiation::where( 'year', $year )->first();
        $days = InitiationDay::where( 'initiation_id', $initiation->id )->orderBy( 'date', 'asc' )->get();
        $persons = InitiationKeyPerson::where( 'initiation_id', $initiation->id )->get();

        return view( 'initiation.show' )
            ->with( 'initiation', $initiation )
            ->with( 'days', $days )
            ->with( 'persons', $persons );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function day( $year, $slug )
    {
        $initiation = Initiation::where( 'year', $year )->first();
        $day = InitiationDay::where( 'slug', $slug )->where( 'initiation_id', $initiation->id )->first();

        return view( 'initiation.day.show' )->with( 'initiation', $initiation )->with( 'day', $day );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
