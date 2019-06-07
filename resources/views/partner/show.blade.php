@section('title', $partner->name)
@extends('layouts.app')

@section('content')

    <h1>{{ $partner->name }}</h1>
    <hr>
    <!--<img src="" alt="{{ $partner->name }} logga">-->
    <p>
        <b>Samarbete sedan:</b> {{ $partner->started }} ({{ date( 'Y' ) - $partner->started + 1 }} år)
        <br>
        <b>Typ av samarbetspartner:</b> {{ $partner->type }}
    </p>
    <h4>Beskrivning:</h4>
    <p>
        {!! nl2br( $partner->description ) !!}
        <br><br>
        <a target="_blank" class="btn btn-grey" href="{{ $partner->link }}">{{ $partner->name }}</a>
    </p>


    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaka.</p>
        <a class="btn btn-grey" href="{{ route( 'partner' ) }}">Samarbetspartners</a>
    </div>
@endsection
