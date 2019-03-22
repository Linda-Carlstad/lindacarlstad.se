@section('title', 'Föreningen')
@extends('layouts.app')

@section('content')

    <h1>Föreningen - Linda Carlstad</h1>
    <hr>
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
            </div>
        </div>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/people.svg' ) }}" alt="Linda Carlstad logga med text">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center justify-content-center">
            <div class="text-block">
                <h3>Styrelsen</h3>
                <p>
                    LINDA är en studentförening under Karlstads Universitet
                    LINDA bevakar ditt intresse som student, såväl att du har det bra på
                    universitet som på fritiden, utbildningen kommer inte alltid att vara
                    rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna
                    om det så krävs eller med att bara ta det lugnt och umgås...
                    <br><br>
                    Nuvarande styrelse kan ses nedan.
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">Ordförande</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:ordforande@lindacarlstad.se">ordforande@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/ordförande.jpg' ) }}" alt="Linda Carlstad ordförande - Caroline Lindström">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Caroline Lindström</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">Vice ordförande</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:vice@lindacarlstad.se">vice@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/vice.jpg' ) }}" alt="Linda Carlstad vice ordförande - Jeanette Öhrströmt">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Jeanette Öhrströmt</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">Kassör</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:kassor@lindacarlstad.se">kassor@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/kassör.jpg' ) }}" alt="Linda Carlstad kassör - Niklas Haugeneset">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Niklas Haugeneset</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">Sekreterare</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:sekreterare@lindacarlstad.se">sekreterare@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/kassör.jpg' ) }}" alt="Linda Carlstad sekreterare - Niklas Haugeneset">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Niklas Haugeneset</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">Sexmästare</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:sex@lindacarlstad.se">sex@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/sex.jpg' ) }}" alt="Linda Carlstad sexmästare - Karin Rääs">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Karin Rääs</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">IT</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:it@lindacarlstad.se">it@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/it.jpg' ) }}" alt="Linda Carlstad it-ansvarig - Tom Olsson">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Tom Olsson</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">PR</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:pr@lindacarlstad.se">pr@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/pr.jpg' ) }}" alt="Linda Carlstad PR - Malin Sannerstedt">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Malin Sannerstedt</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">SNITS</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:snits@lindacarlstad.se">snits@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/snits.jpg' ) }}" alt="Linda Carlstad SNITS-ansvarig - Gustaf Brandorf">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Gustaf Brandorf</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">SNITS</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:snits@lindacarlstad.se">snits@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/snits2.jpg' ) }}" alt="Linda Carlstad SNITS-ansvarig - Julia Lissel">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Julia Lissel</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-3">
            <div class="card bg-dark">
                <h5 class="card-header">Utbildningsansvarig</h5>
                <div class="card-body">
                    <p class="card-title">
                        <a href="mailto:utbildning@lindacarlstad.se">utbildning@lindacarlstad.se</a>
                    </p>
                        <br>
                        <div class="row">
                            <div class="col-lg-4">
                                <img class="img-fluid" src="{{ asset( '/img/board/utbildning.jpg' ) }}" alt="Linda Carlstad utbildningsansvarig - Sandra Silander">
                            </div>
                            <div class="col-lg-8">
                                <p class="card-title font-weight-bold">Sandra Silander</p>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

@endsection
