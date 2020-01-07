<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M722PDN"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top scrolling-navbar d-none d-md-block">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ url( '/' ) }}">
            <img class="" src="{{ asset( 'img/small-logo.png') }}" alt="Golden apple with crown">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav">
                <li class="nav-item {{ Request::is('/') ? 'active' : null }}">
                    <a class="nav-link" href="{{ url( '/' ) }}">Start<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item {{ Request::segment(1) === 'program' ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'programs' ) }}">Program</a>
                </li>
                <li class="nav-item {{ Request::segment(1) === 'föreningen' ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'about' ) }}">Föreningen</a>
                </li>
                <li class="nav-item {{ Request::segment(1) === 'nollning' && Request::segment(2) === date( 'Y' ) ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'initiation.show', date( 'Y' ) ) }}">Nollning {{ date( 'Y' ) }}</a>
                </li>
            </ul>
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item {{ Request::segment(1) === 'sånger' ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'song' ) }}">Sånger</a>
                </li>
                <li class="nav-item {{ Request::segment(1) === 'dokument' ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'document' ) }}">Dokument</a>
                </li>
                <li class="nav-item {{ Request::segment(1) === 'kontakt' ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'contact' ) }}">Kontakta oss</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://tenta.lindacarlstad.se/linda">Tentor</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<nav class="navbar navbar-dark bg-dark fixed-bottom scrolling-navbar d-block d-md-none border-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ url( '/' ) }}">
            <img class="" src="{{ asset( 'img/small-logo.png') }}" alt="Golden apple with crown">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ url( '/' ) }}">Start<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route( 'programs' ) }}">Program</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route( 'about' ) }}">Föreningen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route( 'initiation.show', date( 'Y' ) ) }}">Nollning {{ date( 'Y' ) }}</a>
                </li>
            </ul>
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route( 'song' ) }}">Sånger</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route( 'document' ) }}">Dokument</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route( 'contact' ) }}">Kontakta oss</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://tenta.lindacarlstad.se/linda">Tentor</a>
                </li>
            </ul>
        </div>
    </div>
</nav>