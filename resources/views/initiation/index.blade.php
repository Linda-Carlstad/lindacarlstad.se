@section('title', 'Nollningar')
@extends('layouts.app')
@section('content')

    <h1>Nollningar</h1>
    <hr>
    <div class="col-12">
        <p>
            Här är alla våra tidigare nollningar och deras scheman.
            <br><br>
            Antal nollningar sparade: {{ $initiations->count() }}
        </p>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $initiations->isEmpty() )
                <p class="text-center">Inga nollningar tillagda.</p>
            @endif
            <ul class="list-group col-md-8 offset-md-2">
                @foreach( $initiations as $initiations )
                    <a href="{{ route( 'initiation.show', $initiations->year ) }}" class="list-group-item bg-dark">
                        {{ $initiations->name }}
                    </a>
                @endforeach
            </ul>
        </div>
    </div>

@endsection