@section('title', 'It-kommittén')
@extends('layouts.app')

@section('content')

    <h1>It-kommitté</h1>
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
                    Linda Carlstads it-kommitté är utskott från styrelsen som har hand om allt som rör IT inom föreningen.
                    Vi underhåller alla webbsidor som föreningen har, fyller på med inehåll, rättar till fel och nyutvecklar såklart.
                    Nyligen har vi fått in ett flertal ny medlemmar till it-kommittén och vi vill börja utveckla mer än webbsidor.
                    Låter det intressant så hör av dig till oss så löser vi något till dig!
                </p>
                <a class="btn btn-grey btn-expand" target="_blank" href="https://github.com/Linda-Carlstad">Lär dig mer</a>
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
                    Går du in tankarna och vill göra något mer än bara skoluppgifterna? Vi i Lindas it-kommitté välkommnar dig med
                    öppna armar. Vi har massor med projekt hela tiden och har alltid saker att göra. Gillar du front-end utveckling, back-end it-kommittén,
                    eller du kanske har en brinnande passion för apputveckling. Vad det än är så har vi platsen och resurserna
                    för dina ideér. På vår <a class="link text-underline" target="_blank" href="https://github.com/Linda-Carlstad">Github</a> hittar du alla pågående projekt.
                    <br><br>
                    Så vad väntar du på? Hör av dig så löser vi något kul att göra.
                </p>
                <a class="btn btn-grey btn-expand" href="{{ route( 'contact' ) }}">Kontakt</a>
            </div>
        </div>
    </div>

@endsection
