@section( 'title', 'Högskoleingenjörsprogrammet i datateknik' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Högskoleingenjörsprogrammet i datateknik</h1>
    <hr>
    <p>
    Se dig omkring - mycket av det vi hanterar idag är skapat av dataingenjörer. 
    Programutveckling, databasteknik, internetteknik och cybersäkerhet är självklara 
    inslag hos företag, myndigheter och organisationer.

    Ingenjörsprogrammet i datateknik ger dig möjlighet att studera under flexibla former. Som student 
    på Karlstads universitet kommer du i kontakt med världsledande forskning inom exempelvis cybersäkerhet 
    och datakommunikation. Du läser programgemensamma ämnen under de två första åren och specialiserar dig under det tredje.
    </p>
    <p><b>Utbildningsnivå:</b> Grundutbildning</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Grundläggande behörighet samt Fysik 2, Matematik 3c/Matematik D
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/TGDDI">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>
@endsection