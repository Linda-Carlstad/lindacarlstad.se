@section('title', 'Program' )
@extends('layouts.app' )
@section('content' )

    <h1>Program</h1>
    <hr>
    <div class="text-center">
        <p>Här är en lista på de olika program som ingår i Linda Carlstad</p>
        <ul class="list-group">
            <a href="{{ route( 'data' ) }}" class="list-group-program">
                Högskoleingenjör i datateknik
            </a>
            <a href="{{ route( 'business' ) }}" class="list-group-program">
                IT-design: Affärssystem och ekonomi
            </a>
            <a href="{{ route( 'system' ) }}" class="list-group-program">
                IT-design: Systemdesign
            </a>
            <a href="{{ route( 'webb' ) }}" class="list-group-program">
                Webbutvecklare
            </a>
        </ul>
    </div>

@endsection
