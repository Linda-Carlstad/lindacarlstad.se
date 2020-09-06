@section('title', $day->title)
@extends('layouts.app')

@section('content')

    @if( !$logs->isEmpty() )
        @include( 'initiation.partials.logs', $logs )
    @endif

    <h1>{{ $day->title }}</h1>
    <hr>
    <div class="row">
        <div class="col-md-6">
            <h3>Datum</h3>
            <p>{{ Carbon\Carbon::parse($day->date)->translatedFormat( 'd F' ) }}</p>
            @if( $day->time )
                <h3>Starttid</h3>
                <p>Kl {{ $day->time }}</p>
            @endif
            @if( $day->extra )
                <h3>Extra Information</h3>
                <p>{{ $day->extra }}</p>
            @endif
        </div>
        @if( $day->description )
            <div class="col-md-6">
                <h3>Beskrivning</h3>
                <p>{!! nl2br( $day->description ) !!}</p>
            </div>
        @endif
        <div class="col-12 text-center">
            <h3>Samlingsplats</h3>
            <hr class="d-none d-md-block">
            @if( $day->location )
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="{{ $day->location }}"></iframe>
                </div>
            @else
                <p>Ingen samlingsplats vald.</p>
            @endif
        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningsschema.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation.show', $initiation->year ) }}">Nollning {{ $initiation->year }}</a>
    </div>
@endsection
