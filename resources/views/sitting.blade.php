@section( 'title', 'Sittning' )
@extends( 'layouts.app' )
@section( 'content' )

    <h1>Sittning</h1>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/people.svg' ) }}" alt="Linda Carlstad medlemmar och studenter">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center">
            <div class="text-block">
                <h3>Vad är en sittning?</h3>
                <p>
                    Som ny i studentsammanhang hör en ofta talas om sittningar, men det kan vara lite svårt att
                    veta vad en sittning är. Här är en kort beskrivning.
                    <br>
                    <br>
                    Enkelt sagt är en sittning är en middag, fylld emd sång och spex. Sittningar kan se ganska olika ut.
                    Det kan vara ett tema så att en ska klä ut sig, det kan röra sig om inomhus eller utomhus, den
                    kan innehålla en olika mängd aktiviteter. Kort sammanfattat kan det röra sig om mycket olika events.
                </p>
                <hr>
                <h3>Sånger på sittning</h3>
                <div class="text-center text-md-left">
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/portos-visa">Portos visa</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/lambo">Lambo</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/jag-ska-festa">Jag ska festa</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/linda-i-baren">Linda i Baren</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/portos-visa">Portos visa</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/strejk-pa-pripps">Strek på Prips</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/ack-varmland">Ack, Värmland</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/feta-fransyskor">Feta fransyskor</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/bordeaux-bordeaux">Bordeaux Bordeaux</a>
                    <a class="btn btn-grey m-1" target="_blank" href="https://lindacarlstad.se/s%C3%A5nger/spritbolaget">Spritbolaget</a>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="text-center">
        <h3>Regler på sittning</h3>
    </div>
    <ul class="list-group">
        <li class="list-group-item bg-dark">
            1. När toastmastern talar är man TYST. När toastmastern påkallar uppmärksamhet har man tre ord
            på sig att avsluta pågående samtal. Dock om det är så att man har halva inne, må man nyttja
            fem ord för att avsluta konversationen.
        </li>
        <li class="list-group-item bg-dark">
            2. När man tycker att toastmastern bör ta upp en sång påkallar man dennes uppmärksamhet
            med: TEMPO!
        </li>
        <li class="list-group-item bg-dark">
            3. När toastmastern tar upp en sång sjunger man; samma sång som toastmastern!
        </li>
        <li class="list-group-item bg-dark">
            4. Den som ej har medfödd sångröst äga ändå rätt att efter bästa förmåga delta i sången.
            Alla är dock skyldiga att sjunga hellre än bra.
        </li>
        <li class="list-group-item bg-dark">
            5. Brott mot tyngdlagen undanbedes.
        </li>
        <li class="list-group-item bg-dark">
            6. De som känner sig osäkra ifråga om sången borde hålla sig en takt före, så att när slutet
            av sången nås, ingen blir efter.
        </li>
        <li class="list-group-item bg-dark">
            7. Om man vill sjunga en sång på egen hand må detta endast i undantagsfall göras och i så fall
            ska detta undantagslöst göras under bordet.
        </li>
        <li class="list-group-item bg-dark">
            8. Det är strängeligen förbjudet att behålla sitt goda humör för sig själv!
        </li>
        <li class="list-group-item bg-dark">
            9. Intagen föda återtages ej.
        </li>
        <li class="list-group-item bg-dark">
            10. När maten är slut på din egen tallrik, fortsätt på den till höger.
        </li>
        <li class="list-group-item bg-dark">
            11. Dörrar med höga trösklar kallas fönster, dem får man inte gå ut genom.
        </li>
        <li class="list-group-item bg-dark">
            12. Det är ej rekommenderat att luta sig över bordet när rummet flyttar sig i en cirkel.
        </li>
        <li class="list-group-item bg-dark">
            13. Kontrollera att era bordsgrannar ej nyttjar rusdrycker så det får suddiga ansikten.
        </li>
        <li class="list-group-item bg-dark">
            14. Under bordet: Håll till vänster!
        </li>
    </ul>

@endsection