@section('title', 'Karlstads universitet')
@extends('layouts.app')
@section('content')
    <header class="hero">
        <img class="bg-img" src="{{ asset('/img/hero-image.jpg' ) }}" alt="Lindaiter, faddrar och nollor på Intro dagen">
        <div class="holder text-center">
            <img class="logo" src="{{ asset('/img/small-logo.svg' ) }}" alt="Linda Carlstad logo">
            <h1>{{ config( 'app.name' ) }}</h1>
            <h2>{{ config( 'app.slogan' ) }}</h2>
        </div>
    </header>

    <section class="about py-5">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    @include( 'layouts.partials.flash-messages' )

                    @if( !$sponsors->isEmpty() )
                        <hr>
                        <h3 class="text-center mb-3">Sponsorer</h3>
                        <div class="slick-slider">
                            @foreach( $sponsors as $sponsor )
                                <div class="justify-content-center">
                                    <a class="text-center" href="{{ route( 'partner.show', $sponsor->slug ) }}" aria-label="{{ $sponsor->name }}" title="{{ $sponsor->name }}">
                                        <img class="logo img-fluid" src="https://admin.lindacarlstad.se{{ $sponsor->image }}" alt="{{ $sponsor->name }} logga">
                                    </a>
                                </div>
                            @endforeach
                        </div>
                        <hr>
                    @endif
                    <div class="d-block row d-md-flex flex-md-row py-4">
                        <div class="col-md-5 d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src="{{ asset('/img/people.svg' ) }}" alt="Linda Carlstad medlemmar och studenter">
                        </div>
                        <br class="d-block d-md-none">
                        <div class="col-md-7 d-flex align-items-center justify-content-center">
                            <div class="text-block">
                                <h3>Föreningen</h3>
                                <p>
                                    LINDA är en studentförening under Karlstads Universitet. 
                                    LINDA bevakar ditt intresse som student, såväl att du har det bra på
                                    universitet som på fritiden, utbildningen kommer inte alltid att vara
                                    rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna
                                    om det så krävs eller med att bara ta det lugnt och umgås...
                                </p>
                                <a class="btn btn-grey btn-expand" href="{{ route('about' ) }}" title="Föreningen - Läs mer">Läs mer</a>
                                <a class="btn btn-grey btn-expand" href="https://hitract.se/hitclub/651" rel="noreferrer" target="_blank">Bli medlem</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
                        <div class="col-md-5 d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src="{{ asset('/img/server.svg' ) }}" alt="Tentahub logga server">
                        </div>
                        <br class="d-block d-md-none">
                        <div class="col-md-7 d-flex align-items-center justify-content-center">
                            <div class="text-block">
                                <h3>Tentahub</h3>
                                <p>
                                    Som student vid Karlstads Universitet kan du köpa svaren på en tenta
                                    via biblioteket för 50 KR.
                                    <br>
                                    <b>Det tycker vi är dumt!</b>
                                    <br>
                                    I Linda Vill vi att svaren på tentorna ska finnas tillgängliga gratis
                                    för alla våra medlemmar och för att lyckas med det behöver vi din hjälp!
                                </p>
                                <a class="btn btn-grey btn-expand" href="http://tenta.lindacarlstad.se/linda"
                                   rel=”noreferrer” target="_blank" title="Tentahub">Läs mer</a>
                                <a class="btn btn-grey btn-expand" href="http://tentahub.lindacarlstad.se/"
                                   rel=”noreferrer” target="_blank" title="Nya Tentahub">Nya Tentahub</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="d-block row d-md-flex flex-md-row py-4">
                        <div class="col-md-5 d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src="{{ asset('/img/bottles.svg' ) }}" alt="Studentpuben Bunkern flaska och glas">
                        </div>
                        <br class="d-block d-md-none">
                        <div class="col-md-7 d-flex align-items-center justify-content-center">
                            <div class="text-block">
                                <h3>Studentpuben Bunkern</h3>
                                <p>
                                    Bunkern är Karlstads äldsta studentpub av studenter, för studenter på
                                    Karlstad Universitet. Endast en kort promenad från Universitetet i
                                    bostadsområdet Duvkulla. Placerat i ett cykelförråd som byggdes om för
                                    många år sedan till en mysig studentpub med bra priser.
                                </p>
                                <a class="btn btn-grey btn-expand" href="http://www.studentpuben-bunkern.se/"
                                   rel=”noreferrer” target="_blank" title="Studentpuben Bunkern">Läs mer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br class="d-block d-md-none">
        </div>
    </section>

@endsection
