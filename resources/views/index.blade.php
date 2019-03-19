@section('title', 'Linjeförening för datavetare')
@extends('layouts.app')
@section('content')

    <header class="hero">
        <img class="bg-img" src="{{ asset('/img/hero-image.jpg' ) }}" alt="Lindaiter, faddrar och nollor på Dagen K">
        <div class="holder text-center">
            <img class="logo" src="{{ asset('/img/small-logo.svg' ) }}" alt="Linda Carlstad logo">
            <h1>Linda Carlstad</h1>
            <h2>Linjeförening för datavetare</h2>
        </div>
    </header>

    <section class="about py-5">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="d-block row d-md-flex flex-md-row py-4">
                        <div class="col-md-5 d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src="{{ asset('/img/logo.png' ) }}" alt="Linda Carlstad logga med text">
                        </div>
                        <br class="d-block d-md-none">
                        <div class="col-md-7 d-flex align-items-center justify-content-center">
                            <div class="text-block">
                                <h3>Linda Carlstad</h3>
                                <p>
                                    LINDA är en studentförening under Karlstads Universitet
                                    LINDA bevakar ditt intresse som student, såväl att du har det bra på
                                    universitet som på fritiden, utbildningen kommer inte alltid att vara
                                    rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna
                                    om det så krävs eller med att bara ta det lugnt och umgås...
                                </p>
                                <a class="btn btn-grey btn-expand" href="{{ route('about' ) }}">Läs mer</a>
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
                                <a class="btn btn-grey btn-expand" href="http://tentahub.se/linda">Läs mer</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="d-block row d-md-flex flex-md-row py-4">
                        <div class="col-md-5 d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src="{{ asset('/img/bunkern.png' ) }}" alt="Studentpuben Bunkern logga">
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
                                <a class="btn btn-grey btn-expand" href="http://www.studentpuben-bunkern.se/">Läs mer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br class="d-block d-md-none">
        </div>
    </section>

@endsection
