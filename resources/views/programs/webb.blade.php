@section( 'title', 'Webbutvecklare' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Webbutvecklare</h1>
    <hr>
    <p>
        Webbutvecklarprogrammet är till för dig som är intresserad av webbutveckling från olika
        perspektiv. Du får lära dig att rent tekniskt utveckla webbplatser och webbaserade system
        genom att använda aktuella programmeringsspråk och tekniker. Du får också utveckla dina
        kunskaper om hur system kan utvärderas och designas utifrån användarens behov (s.k.
        interaktionsdesign). Genom hela utbildningen går informatik som en röd tråd, det vill
        säga kopplingen mellan och kombinationen av informationsteknik (IT), verksamheter och
        människor. Genom studierna på programmet får du alltså med dig kunskaper i webbutveckling,
        interaktionsdesign och systemdesign.
    </p>
    <p>
        <b>Utbildningsnivå:</b> Grundutbildning
    </p>
    <h3>Behörighetskrav</h3>
    <p>
        Grundläggande behörighet + Matematik 2a eller 2b eller 2c och Samhällskunskap 1b eller 1al + 1a2.
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/SGWEB">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>
@endsection