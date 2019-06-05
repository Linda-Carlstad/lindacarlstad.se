@section('title', $day->title)
@extends('layouts.app')

@section('content')

    <h1>{{ $day->title }}</h1>
    <hr>
    <div class="row">
        <div class="col-md-6">
            <h3>Datum</h3>
            <p>{{ $day->date }}</p>
            <h3>Starttid</h3>
            <p>Kl {{ $day->time }}</p>
            <h3>Extra Information</h3>
            <p>{{ $day->extra }}</p>
        </div>
        <div class="col-md-6">
            <h3>Beskrivning</h3>
            <p>{!! nl2br( $day->description ) !!}</p>
        </div>
        <div class="col-12 text-center">
            <hr class="d-none d-md-block">
            <h3>Samlingsplats</h3>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="{{ $day->location }}"></iframe>
            </div>
        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningsschema.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation' ) }}">Schema</a>
    </div>
@endsection
