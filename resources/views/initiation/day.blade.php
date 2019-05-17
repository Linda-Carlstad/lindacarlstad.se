@section('title', 'Schema')
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
        </div>
        <div class="col-md-6">
            <h3>Beskrivning:</h3>
            <p>{{ $day->description }}</p>
        </div>
        <div class="col-12 text-center">
            <hr class="d-none d-md-block">
            <h3>Samlingsplats:</h3>
            {!!html_entity_decode($day->location)!!}

        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningsschema.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation.schedule' ) }}">Schema</a>
    </div>
@endsection
