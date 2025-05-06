@section('title', 'Studentföreningar')
@extends('layouts.app')

@section('content')
    <h1>Studentföreningar</h1>
    <hr>
    <div class="col-12">
        <p>
            Här finner du alla studentföreningar på Karlstads universitet.
            <br><br>
            Antal studentföreningar: {{ $associations->count() }}
        </p>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $associations->isEmpty() )
                <p class="text-center">Inga studentföreningar tillagda.</p>
            @else

                <ul class="list-group col-md-8 offset-md-2">
                    @if( $special )
                        <a href="{{ route( 'association.show', $special->slug ) }}" class="list-group-item bg-dark">
                            {{ $special->name }}
                        </a>
                    @endif
                    @foreach( $associations as $association )
                        <a href="{{ route( 'association.show', $association->slug ) }}" class="list-group-item bg-dark">
                            {{ $association->name }}
                        </a>
                    @endforeach
                </ul>
            @endif
        </div>
    </div>

@endsection
