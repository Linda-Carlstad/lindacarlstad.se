@section('title', 'Sånger')
@extends('layouts.app')

@section('content')
    <h1>Sånger</h1>
    <hr>
    <div class="col-12">
        <p>
            En samling med sånger som vi i LINDA sjunger, på nollning och inte.
            <br><br>
            Antal sånger: {{ $songs->count() }}
        </p>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $songs->isEmpty() )
                <p class="text-center">Inga sånger tillagda.</p>
            @endif
            <ul class="list-group col-md-8 offset-md-2">

                @foreach( $songs as $song )
                    <a href="{{ route( 'song.show', $song->slug ) }}" class="list-group-item bg-dark">
                        {{ $song->title }}
                    </a>
                @endforeach
            </ul>
        </div>
    </div>

@endsection
