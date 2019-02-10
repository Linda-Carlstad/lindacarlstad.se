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
    <div class="row px-3 my-5">
        <div class="col-md-8 p-4">
            <h3>Vilka är Linda?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="{{ route('about') }}" class="btn btn-secondary">Läs mer</a>
        </div>
        <div class="d-none d-md-block col-md-4 p-4 align-self-center">
            <img class="img-fluid" src="{{ asset( '/img/logo.png' ) }}" alt="">
        </div>
    </div>
    <hr>
    <div class="row px-3 my-5">
        <div class="d-none d-md-block col-md-4 p-4 align-self-center">
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
            <h3>Studentpuben Bunkern</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="http://www.studentpuben-bunkern.se/" class="btn btn-secondary">Läs mer</a>
        </div>
        <div class="d-none d-md-block col-md-4 p-4 align-self-center">
            <img class="img-fluid" src="{{ asset( '/img/logo.png' ) }}" alt="">
        </div>
    </div>

@endsection
