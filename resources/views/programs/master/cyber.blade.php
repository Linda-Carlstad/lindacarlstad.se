@section( 'title', 'Masterprogram i cybersäkerhet' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Masterprogram i cybersäkerhet</h1>
    <hr>
    <p>
        Inom datavetenskap går utvecklingen snabbt framåt. Därför inriktar sig programmet vid Karlstads universitet på att utrusta studenten 
        med en förmåga att kontinuerligt inhämta och tillämpa ny kunskap. Utbildningen syftar även till att studenterna ska förvärva fördjupad 
        kompetens inom det datavetenskapliga området med inriktning mot cybersäkerhet.
    </p>
    <p><b>Utbildningsnivå:</b> Avancerad nivå</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Grundläggande behörighet. Gymnasiets Engelska 6 eller motsvarande, kandidatexamen 180 hp samt 90 hp inom datavetenskap inklusive följande kurser:
        <br>
        Programmeringsteknik 7,5 hp
        <br>
        Programutvecklingsmetodik 7,5 hp
        <br>
        Operativsystem 5 hp
        <br>
        Datakommunikation I 7,5 hp
        <br>
        Matematisk statistik 7,5 hp
        <br>
        (eller kurser som motsvarar ovanstående)
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/TAMCY">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>

@endsection