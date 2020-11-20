<div class="container-fluid">
    <a class="navbar-brand" href="{{ url( '/' ) }}" aria-label="Start" title="Start">
        <img class="" src="{{ asset( 'img/small-logo.png') }}" alt="Golden apple with crown">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav">
            <li class="nav-item {{ Request::is('/') ? 'active' : null }}">
                <a class="nav-link" href="{{ url( '/' ) }}" title="Start">Start<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item {{ Request::segment(1) === 'program' ? 'active' : null }}">
                <a class="nav-link" href="{{ route( 'programs' ) }}" title="Program">Program</a>
            </li>
            <li class="nav-item {{ Request::segment(1) === 'föreningen' ? 'active' : null }}">
                <a class="nav-link" href="{{ route( 'about' ) }}" title="Föreningen">Föreningen</a>
            </li>
            @if( session()->has( 'initiation' ) )
                <li class="nav-item {{ Request::segment(1) === 'nollning' && Request::segment(2) === session()->get( 'initiation' ) ? 'active' : null }}">
                    <a class="nav-link" href="{{ route( 'initiation.show', session()->get( 'initiation' ) ) }}" title="Nollning {{ session()->get( 'initiation' ) }}">Nollning {{ session()->get( 'initiation' ) }}</a>
                </li>
            @endif
        </ul>
        <ul class="nav navbar-nav ml-auto">
            <li class="nav-item {{ Request::segment(1) === 'sånger' ? 'active' : null }}">
                <a class="nav-link" href="{{ route( 'song' ) }}" title="Sånger">Sånger</a>
            </li>
            {{--
            <li class="nav-item {{ Request::segment(1) === 'dokument' ? 'active' : null }}">
                <a class="nav-link" href="{{ route( 'document' ) }}" title="Dokument">Dokument</a>
            </li>
            --}}
            <li class="nav-item {{ Request::segment(1) === 'kontakt' ? 'active' : null }}">
                <a class="nav-link" href="{{ route( 'contact' ) }}" title="Kontakta oss">Kontakta oss</a>
            </li>
            <li class="nav-item">
                <a rel="noreferrer" target="_blank" class="nav-link" href="https://tenta.lindacarlstad.se/linda" title="Tentor">Tentor</a>
            </li>
        </ul>
    </div>
</div>