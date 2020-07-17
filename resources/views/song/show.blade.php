@section('title', $song->title)
@extends('layouts.app')

@section('content')

    <h1>{{ $song->title }}</h1>
    <hr>
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <p><b>Melodi:</b> {{ $song->melody }}</p>
        <p>{!! nl2br( $song->text ) !!}</p>
    </div>


    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaka.</p>
        <a class="btn btn-grey" href="{{ route( 'song' ) }}" title="Sånger">Sånger</a>
    </div>
@endsection
