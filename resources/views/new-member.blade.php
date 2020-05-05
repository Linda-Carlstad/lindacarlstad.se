@section('title', 'Ny medlem')
@extends('layouts.app')

@section('content')

    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/people.svg' ) }}" alt="Linda Carlstad medlemmar och studenter">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center justify-content-center">
            <div class="text-block">
                <h1>Bli medlem</h1>
                <p>
                    Som medlem i Linda kommer du kunna gå på olika evengemang, som SNITS, nollning och sittningar.
                    Du måste även vara medlem i Linda för att kunna ha möjligheten till att köpa en ovve.
                    Medlemskapet kostar 300 kr och gäller hela livet ut.
                </p>
                <p>
                    För att bli medlem måste du studera IT (<a class="link" href="{{ route( 'programs' ) }}">se program här</a>)
                    på Karlstads universitet. Medlemsbetalningar görs via Swish, till numret: <b>123-539 51 08</b>.
                </p>
                <a class="btn btn-grey btn-expand" href="https://forms.gle/TXC5uW51jgApvWb48"
                   rel="noreferrer" target="_blank">Bli medlem</a>
                <a class="btn btn-grey btn-expand" href="{{ route( 'about' ) }}" target="_blank">Om föreningen</a>
            </div>
        </div>
    </div>

@endsection
