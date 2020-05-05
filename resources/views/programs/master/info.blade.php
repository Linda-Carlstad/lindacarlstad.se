@section( 'title', 'Masterprogram i informatik' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Masterprogram i informatik</h1>
    <hr>
    <p>
        Masterprogrammet i informatik/informationssystem är ett program på avancerad nivå för dig som
        vill fördjupa dina kunskaper om hur människor utvecklar och använder e-tjänster för att stödja
        olika verksamheter i företag och samhälle.Det finns möjlighet att studera till magisterexmen (1 år)
         inom masterprogrammets ram.
    </p>
    <p><b>Utbildningsnivå:</b> Avancerad nivå</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Gymnasiets Engelska kurs 6 eller B eller motsvarande, kandidatexamen 180 hp varav minst 90 hp inom
        Informatik eller Datavetenskap.
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/SAINF">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>

@endsection
