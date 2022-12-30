@section('title', 'Föreningen')
@extends('layouts.app')

@section('content')

    <h1>Föreningen - {{ config( 'app.name' ) }}</h1>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/logo.png' ) }}" alt="Linda Carlstad logga med text">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center justify-content-center">
            <div class="text-block">
                <h3>{{ config( 'app.name' ) }}</h3>
                <p>
                    LINDA är en studentförening under Karlstads Universitet. 
                    LINDA bevakar ditt intresse som student, såväl att du har det bra på
                    universitet som på fritiden, utbildningen kommer inte alltid att vara
                    rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna
                    om det så krävs eller med att bara ta det lugnt och umgås...
                </p>
                <p>
                    För att bli medlem måste du studera IT (<a class="link" href="{{ route( 'programs' ) }}">se program här</a>)
                    på Karlstads universitet. <br/>Medlemskap köps i appen Hitract. 
                </p>
                @if( $uaIsDesktop )
                    <p><strong>För att ladda ner Hitract och bli medlem så krävs en iOS- eller androidtelefon.<strong></p>
                @else
                    <a class="btn btn-grey btn-expand" href="https://hitract.se/hitclub/651"
                    rel="noreferrer" target="_blank">Bli medlem</a>
                @endif
            </div>
        </div>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/board/styrelse-2022.jpg' ) }}" alt="Styrelsen 2022">
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
        @foreach($boardMembers as $boardMember)
            <div class="col-lg-6 my-3 d-flex">
                <div class="card flex-fill bg-dark">
                    <h5 class="card-header">{{ $boardMember->title }}</h5>
                    <div class="card-body">
                        <p class="card-title">
                            <a target="_blank" href="mailto:{{ $boardMember->email }}">{{ $boardMember->email }}</a>
                        </p>
                            <br>
                            <div class="row">
                                <div class="col-lg-4 mb-3 mb-md-0">
                                    <img class="img-fluid" src="https://admin.lindacarlstad.se/{{ !empty( $boardMember->image ) ? $boardMember->image : 'img/logo.png' }}" alt="Linda Carlstad {{ strtolower( $boardMember->title ) }} - {{ $boardMember->name }}">
                                    {{-- <img class="img-fluid" src="http://admin.lindacarlstad.se.test/{{ !empty( $boardMember->image ) ? $boardMember->image : 'img/logo.png' }}" alt="Linda Carlstad {{ strtolower( $boardMember->title ) }} - {{ $boardMember->name }}"> --}}
                                </div>
                                <div class="col-lg-8">
                                    <p class="card-title font-weight-bold">{{ $boardMember->name }}</p>
                                    <p class="card-text">
                                        {!! nl2br( $boardMember->description ) !!}
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
