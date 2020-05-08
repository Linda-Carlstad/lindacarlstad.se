@section( 'title', 'Civilingenjör datateknik' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Civilingenjör datateknik</h1>
    <hr>
    <p>
        Som civilingenjör i datateknik har du kunskaper som ger dig möjlighet att
        utforma teknologin efter människans behov. Utbildningen inriktar sig på
        att utrusta dig med förmågan att snabbt inhämta och tillämpa ny kunskap.
        Du blir en kreativ problemlösare som även på sikt kan inta
        ledande roller i samhället, till exempel som chef.
    </p>
    <p><b>Utbildningsnivå:</b> Grundutbildning</p>
    <h3>Behöringhetskrav</h3>
    <p>
        Grundläggande behörighet
        samt Matematik E, Fysik B och Kemi A,
<br>
        alternativt Grundläggande behörighet
        samt Matematik 4, Fysik 2 och Kemi 1.
    </p>
    <p><b>Vill du läsa mer om utbildningen? Klicka på knappen nedan.</b></p>
    <a rel="noreferrer" target="_blank" class="btn btn-grey" href="https://www.kau.se/utbildning/program-och-kurser/program/TACDA">Läs mer</a>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till alla program.</p>
        <a class="btn btn-grey" href="{{ route( 'programs' ) }}">Program</a>
    </div>

@endsection
