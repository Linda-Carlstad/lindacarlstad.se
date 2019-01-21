@section('title', 'Hem')
@extends('layouts.app')
@section('content')

    <img src="{{ asset( '/img/hero-image.jpg' ) }}" class="image-bg">
    <div class="hero">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-12 text-center">
                <img src="{{ asset( '/img/logo.png' ) }}" alt="Linda Carlstads logga">
                <br>
                <h1>Linda Carlstad</h1>
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-2 bg-dark" height="20px" width="20px">Sponsor</div>
      <div class="col-sm-2 bg-dark" height="20px" width="20px">Sponsor</div>
      <div class="col-sm-2 bg-dark" height="20px" width="20px">Sponsor</div>
      <div class="col-sm-2 bg-dark" height="20px" width="20px">Sponsor</div>
      <div class="col-sm-2 bg-dark" height="20px" width="20px">Sponsor</div>
      <div class="col-sm-2 bg-dark" height="20px" width="20px">Sponsor</div>
    </div>
    <hr>
    <div class="row px-3 my-5">
        <div class="col-md-8 p-4">
            <h3>Vilka är Linda?</h3>
            <p>
              LINDA är en studentförening under karlstad universitet.
              LINDA bevakar ditt intresse som student, såväl att du har det bra på
              universitet som på fritiden, utbildningen kommer inte alltid att vara rolig
              eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna om
              det så krävs eller med att bara ta det lugnt och umgås.
              Bland annat brukar många av oss gå till studentpuben Bunkern där man kan gå och
              ta en öl/läsk/kopp kaffe eller äta god mat och spela spel och ta det lugnt mellan
              varven på skolan. LINDA grundades 1984.
            </p>
            <a href="{{ route('about') }}" class="btn btn-secondary">Läs mer</a>
        </div>
        <div class="col-md-4 p-4 align-self-center">
            <img class="img-fluid" src="{{ asset( '/img/logo.png' ) }}" alt="">
        </div>
    </div>
    <hr>
    <div class="row px-3 my-5">
        <div class="col-md-4 p-4 align-self-center">
            <img class="img-fluid" src="{{ asset( '/img/logo.png' ) }}" alt="">
        </div>
        <div class="col-md-8 p-4">
            <h3>Bli medlem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="{{ route('new-member') }}" class="btn btn-secondary">Bli Medlem</a>
        </div>
    </div>
    <hr>
    <div class="row px-3 my-5">
        <div class="col-md-8 p-4">
            <h3>Studentpubben Bunkern</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="http://www.studentpuben-bunkern.se/" class="btn btn-secondary">Läs mer</a>
        </div>
        <div class="col-md-4 p-4 align-self-center">
            <img class="img-fluid" src="{{ asset( '/img/logo.png' ) }}" alt="">
        </div>
    </div>

@endsection
