@section('title', 'Hemliga sånger')
@extends('layouts.app')

@section('content')

    <div class="text-center">
        <h1>Hemliga sånger</h1>
    </div>
    <hr>

    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $songs->isEmpty() )
                <p class="text-center">Inga sånger hittade.</p>
            @else
                <ul class="list-group col-md-8 offset-md-2">
                    @foreach( $songs as $song )
                        <a href="{{ route( 'song.show', $song->slug ) }}" class="list-group-item bg-dark">
                            {{ $song->title }}
                        </a>
                    @endforeach
                </ul>
            @endif
        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Tillbaka till alla sånger</p>
        <a href="{{ route( 'song' ) }}" class="btn btn-grey">Sånger</a>
    </div>

@endsection