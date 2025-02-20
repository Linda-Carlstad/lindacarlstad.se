@section('title', 'Program' )
@extends('layouts.app' )
@section('content' )

    <h1>Program</h1>
    <hr>
    <div class="text-center">
        <h3>Grundutbildningar</h3>
        <p>Här är en lista på de olika item som ingår i {{ config( 'app.name' ) }}.</p>
        <div class="col-md-8 offset-md-2">
            <ul class="list-group">
                <a href="{{ route( 'aidata' )}}" class="list-group-item bg-dark">
                    Artificiell intelligens
                </a>
                <a href="{{ route( 'civil' )}}" class="list-group-item bg-dark">
                    Civilingenjör datateknik
                </a>
                <a href="{{ route( 'data' ) }}" class="list-group-item bg-dark">
                    Högskoleingenjör i datateknik
                </a>
                <a href="{{ route( 'business' ) }}" class="list-group-item bg-dark">
                    IT-design: Affärssystem och ekonomi
                </a>
                <a href="{{ route( 'system' ) }}" class="list-group-item bg-dark">
                    IT-design: Systemdesign
                </a>
                <a href="{{ route( 'candidate' ) }}" class="list-group-item bg-dark">
                    Kandidatprogram i datavetenskap
                </a>
                <a href="{{ route( 'webb' ) }}" class="list-group-item bg-dark">
                    Webbutvecklare
                </a>
            </ul>
        </div>
        <hr>
        <div class="col-md-8 offset-md-2">
            <h3>Avancerade utbildningar</h3>
            <ul class="list-group">
                <a href="{{ route( 'master.cyber' ) }}" class="list-group-item bg-dark">
                    Masterprogram i cybersäkerhet
                </a>
                <a href="{{ route( 'master.data' ) }}" class="list-group-item bg-dark">
                    Masterprogram i datavetenskap
                </a>
                <a href="{{ route( 'master.info' ) }}" class="list-group-item bg-dark">
                    Masterprogram i informatik
                </a>
            </ul>
        </div>
    </div>

@endsection
