@section( 'title', 'Masterprogram i Datavetenskap' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Masterprogram i Datavetenskap</h1>
    <hr>
    <p>
        Detta program är ett 2-årigt program som bygger på en 3-årig kandidatexamen i datavetenskap
        eller motsvarande. Målet är att förse studenten med avancerade kunskaper inom datavetenskap
        och i synnerhet inom datasäkerhet, datakommunikation och trådlösa nätverk.
    </p>
    <p><b>Utbildningsnivå:</b> Avancerad nivå</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Gymnasiets Engelska kurs B eller motsvarande, kandidatexamen 180 hp samt minst 90 hp
        inom datavetenskap inklusive följande kurser:
        <br>
        Programmeringsteknik 7,5 hp
        <br>
        Programutvecklingsmetodik 7,5 hp
        <br>
        Operativsystem 7,5 hp
        <br>
        Datakommunikation I 7,5 hp
        <br>
        samt
        <br>
        Matematisk statistik 7,5 hp
        <br>
        (eller kurser som motsvarar ovanstående)
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/TAMCS">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>

@endsection