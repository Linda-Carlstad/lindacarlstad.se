<footer class="footer py-5 mb-5 mb-md-0" id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-3 mb-md-0 text-md-center">
                <a data-toggle="tooltip" data-placement="right" title="Linda Carlstad" class="footer-img" href="{{ url( '/' ) }}" aria-label="Linda Carlstad">
                    <img class="img-fluid logo mb-md-4" src="{{ asset( 'img/logo.png') }}" alt="{{ config( 'app.name' ) }} logga">
                </a>
                <br class="d-none d-md-block">
                <a data-toggle="tooltip" data-placement="right" title="Karlstads universtitet" rel="noreferrer" target="_blank" aria-label="Karlstads universtitet" class="footer-img" href="https://kau.se">
                    <img class="img-fluid logo" src="{{ asset( 'img/partner/kau.png') }}" alt="Karlstads universitets logga">
                </a>
                <br class="d-none d-md-block">
                <a data-toggle="tooltip" data-placement="right" title="Karlstad studentkår" rel="noreferrer" target="_blank" aria-label="Karlstad studentkår" class="footer-img" href="https://karlstadstudentkar.se/">
                    <img class="img-fluid logo" src="https://karlstadstudentkar.se/app/uploads/2019/04/KS_logotyp_ljusgron.svg" alt="Karlstad studentkår logga">
                </a>
            </div>
            <div class="col-md-3">
                <hr class="d-block d-md-none">
                <span>{{ config( 'app.name' ) }}</span>
                <br class="d-block d-md-none">
                <hr class="d-none d-md-block">
                <a href="mailto:{{ config( 'mail.from.address' ) }}" title="Mail to {{ config( 'mail.from.address' ) }}">{{ config( 'mail.from.address' ) }}</a>
                <br>
                Universitetsgatan 2
                <br>
                651 88 Karlstad
            </div>
            <div class="col-md-3">
                <hr class="d-block d-md-none">
                <span>Föreningen</span>
                <br class="d-block d-md-none">
                <hr class="d-none d-md-block">
                <a class="{{ Request::segment(1) === 'kontakt' ? 'active' : null }}" href="{{ route( 'contact' ) }}" title="Kontakta oss">Kontakta oss</a>
                <br>
                <a class="{{ Request::segment(1) === 'föreningen' ? 'active' : null }}" href="{{ route( 'about' ) }}" title="Om oss">Om oss</a>
                <br>
                <a class="{{ Request::segment(1) === 'program' ? 'active' : null }}" href="{{ route( 'programs' ) }}" title="Program">Program</a>
                <br>
                <a class="{{ Request::segment(1) === 'it-kommitte' ? 'active' : null }}" href="{{ route( 'it' ) }}" title="It-kommitté">It-kommitté</a>
                <br>
                <a class="{{ Request::segment(1) === 'ny-medlem' ? 'active' : null }}" href="{{ route( 'new-member' ) }}" title="Bli medlem">Bli medlem</a>
            </div>
            <div class="col-md-3">
                <hr class="d-block d-md-none">
                <span>Läs mer</span>
                <br class="d-block d-md-none">
                <hr class="d-none d-md-block">
                <a class="{{ Request::segment(1) === 'nollning' ? 'active' : null }}" href="{{ route( 'initiation' ) }}" title="Nollningar">Nollningar</a>
                <br>
                <a class="{{ Request::segment(1) === 'galleri' ? 'active' : null }}" href="{{ route( 'gallery' ) }}" title="Galleri">Galleri</a>
                <br>
                <a class="{{ Request::segment(1) === 'sittning' ? 'active' : null }}" href="{{ route( 'sitting' ) }}" title="Sittning">Sittning</a>
                <br>
                <a class="{{ Request::segment(1) === 'partner' ? 'active' : null }}" href="{{ route( 'partner' ) }}" title="Partners">Partners</a>
                <br>
                <a class="{{ Request::segment(1) === 'föreningar' ? 'active' : null }}" href="{{ route( 'association' ) }}" title="Föreningar">Föreningar</a>
                <br>
                <a class="{{ Request::segment(1) === 'sånger' ? 'active' : null }}" href="{{ route( 'song' ) }}" title="Sånger">Sånger</a>
                <br>
                {{--
                <a class="{{ Request::segment(1) === 'dokument' ? 'active' : null }}" href="{{ route( 'document' ) }}" title="Dokument">Dokument</a>
                <br>
                --}}
                <a class="{{ Request::segment(1) === 'nyheter' ? 'active' : null }}" href="{{ route( 'news' ) }}" title="Nyheter">Nyheter</a>
                <br>
                <a rel="noreferrer" target="_blank" href="http://tenta.lindacarlstad.se/linda" title="Tentor">Tentor</a>
                <br>
                <a target="_blank" href="{{ route( 'terminal' ) }}" title="Terminal">Terminal</a>
            </div>
        </div>
        <div class="row social-footer-icons justify-content-center">
            <a data-toggle="tooltip" data-placement="top" title="Linda Carlstad Facebook" rel="noreferrer" aria-label="Linda Carlstad Facebook"
               target="_blank" href="https://www.facebook.com/linda.carlstad/"><i class="fab fa-facebook"></i>
            </a>
            <br>
            <a data-toggle="tooltip" data-placement="top" title="Linda Carlstad Instagram" rel="noreferrer" aria-label="Linda Carlstad Instagran"
               target="_blank" href="https://www.instagram.com/lindacarlstad/"><i class="fab fa-instagram"></i>
            </a>
            <br>
            <a data-toggle="tooltip" data-placement="top" title="Linda Carlstad LinkedIn" rel="noreferrer"  aria-label="Linda Carlstad LinkedIn"
               target="_blank" href="https://www.linkedin.com/company/linda-carlstad/about/"><i class="fab fa-linkedin"></i>
            </a>
            <br>
            <a data-toggle="tooltip" data-placement="top" title="@lindacarlstad" aria-label="Linda Carlstad Snapchat"><i class="fab fa-snapchat"></i>
            </a>
            <br>
            <a data-toggle="tooltip" data-placement="top" title="Linda Carlstad Github" rel="noreferrer" aria-label="Linda Carlstad Github"
               target="_blank" href="https://github.com/Linda-Carlstad"><i class="fab fa-github"></i>
            </a>
            <br>
            <a data-toggle="tooltip" data-placement="top" title="Linda Carlstad Discord" rel="noreferrer" aria-label="Linda Carlstad Discord"
               target="_blank" href="https://discord.gg/xGZNRSD"><i class="fab fa-discord"></i>
            </a>
            <br>
            <a data-toggle="tooltip" data-placement="top" title="Linda Carlstad Reddit" rel="noreferrer" aria-label="Linda Carlstad Reddit"
               target="_blank" href="https://www.reddit.com/r/lindacarlstad/"><i class="fab fa-reddit"></i>
            </a>
            <br>
        </div>
    </div>
    <div class="footer-copyright">
        <br>
        <small>Utbildningsförening under
            <a rel="noreferrer" target="_blank" href="https://www.kau.se/" title="Karlstads univesrsitet">Karlstads universitet</a> och en del av
            <a rel="noreferrer" target="_blank" href="https://www.kau.se/hhk" title="Handelshögskolan">Handelshögskolan</a>
        </small>
        <br>
        <small>Copyright © {{ date( 'Y' ) }} - Alla rättigheter reserverade - Studentföreningen
            <a href="{{ url( '/' ) }}" title="{{ config( 'app.name' ) }}">{{ config( 'app.name' ) }}</a>
        </small>
    </div>
</footer>
