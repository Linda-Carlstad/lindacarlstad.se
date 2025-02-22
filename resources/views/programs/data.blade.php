@section( 'title', 'Högskoleingenjör i Datateknik' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Högskoleingenjör i Datateknik</h1>
    <hr>
    <p>
        Datorer används inom de flesta verksamheter idag - inom företag, myndigheter och
        organisationer. Dataingenjörer med olika kunskaper behövs till exempel i programutveckling,
        databasteknik, Internetteknik och datasäkerhet. Utbildningen ger dig möjlighet att studera
        under flexibla former. Du läser gemensamma ämnen för alla på programmet under de två första
        åren och det tredje året specialiserar du dig. Under din studietid här i Karlstad kommer
        du i kontakt med världsledande forskning inom några områden, till exempel datasäkerhet.
    </p>
    <p><b>Utbildningsnivå:</b> Grundutbildning</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Grundläggande behörighet samt Fysik 2 och Matematik 3c (områdesbehörighet A8 med undantag
        för Kemi 1) alternativt områdesbehörighet 8 med undantag för Kemi A.
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/SGWEB">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>
@endsection
