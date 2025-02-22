@section( 'title', 'Kandidatprogram i datavetenskap' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Kandidatprogram i datavetenskap</h1>
    <hr>
    <p>
        Är du intresserad av IT i allmänhet och programmering i synnerhet? Med en examen från
        kandidatprogrammet i datavetenskap kan du vara med och utveckla och forma framtidens
        digitala samhälle. Programmet innehåller bland annat programvarudesign, internetteknik och
        cybersäkerhet. Det tredje läsåret ger dig goda möjligheter att fördjupa eller bredda dig inom
        just det område du tycker är mest intressant.
    </p>
    <p><b>Utbildningsnivå:</b> Grundutbildning</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Grundläggande behörighet samt Matematik 3c/Matematik D
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/TGKDV">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>

@endsection