@section('title', 'Schema')
@extends('layouts.app')

@section('content')

    <h1>Schema</h1>
    <hr>

    <div class="col-md-8 offset-md-2">
        <ul class="list-group">
            @foreach( $days as $day )
                <a href="{{ route( 'initiation.show', $day->slug ) }}" class="list-group-item bg-dark">
                    {{ $day->title }}
                </a>
            @endforeach
        </ul>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningen.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation' ) }}">Program</a>
    </div>


@endsection
