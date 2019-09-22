@section('title', 'It-kommittén')
@extends('layouts.app')

@section('content')

    <h1>It-kommittén</h1>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/people.svg' ) }}" alt="Linda Carlstad medlemmar och studenter">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center">
            <div class="text-block">
                <h3>Vilka är it-kommittén?</h3>
                <p>
                    It-kommittén är blah blh blah...
                </p>
                <a class="btn btn-grey btn-expand" href="{{ route('about' ) }}">Läs mer</a>
            </div>
        </div>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/server.svg' ) }}" alt="Tentahub logga server">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center">
            <div class="text-block">
                <h3>Gå med i it-kommittén</h3>
                <p>
                    Vill du gå med it-kommittén?
                </p>
                <a class="btn btn-grey btn-expand" href="mailto:it@lindacarlstad.se">Skriv till oss</a>
            </div>
        </div>
    </div>

@endsection
