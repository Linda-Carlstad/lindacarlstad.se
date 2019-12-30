@section('title', 'Partners')
@extends('layouts.app')

@section('content')
    <h1>Föreningar</h1>
    <hr>
    <div class="col-12">
        <p>
            Här finner du alla föreningar på Karlstads Universitet.
            <br><br>
            Antal förenigar: {{ $associations->count() }}
        </p>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $associations->isEmpty() )
                <p class="text-center">Inga förenigar tillagda.</p>
            @endif
            <ul class="list-group col-md-8 offset-md-2">
                @foreach( $associations as $association )
                    <a href="{{ route( 'association.show', $association->slug ) }}" class="list-group-item bg-dark">
                        {{ $association->name }}
                    </a>
                @endforeach
            </ul>
        </div>
    </div>

@endsection
