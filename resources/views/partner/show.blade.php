@section('title', $partner->name)
@extends('layouts.app')

@section('content')
    <h1>{{ $partner->name }}</h1>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="https://admin.lindacarlstad.se/{{ $partner->image }}" alt="{{ $partner->name }} logga">
            {{-- <img class="img-fluid" src="http://admin-lindacarlstad-se.test{{ $partner->image }}" alt="{{ $partner->name }} logga"> --}}
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex">
            <div class="text-block">
                <h4>Beskrivning:</h4>
                <p>
                    {!! nl2br( $partner->description ) !!}
                </p>
                <p>
                    <b>Samarbete sedan:</b> {{ $partner->started }} ({{ date( 'Y' ) - $partner->started + 1 }} år)
                    <br>
                    <b>Typ av samarbetspartner:</b> {{ $partner->type }}
                </p>
                <a target="_blank" class="btn btn-grey" href="{{ $partner->link }}">{{ $partner->name }}</a>

            </div>
        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaka.</p>
        <a class="btn btn-grey" href="{{ route( 'partner' ) }}">Partners</a>
    </div>
@endsection
