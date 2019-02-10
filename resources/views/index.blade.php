@section('title', 'Hem')
@extends('layouts.app')
@section('content')

    <header class="hero">
        <img class="bg-img" src="{{ asset( '/img/hero-image.jpg' ) }}" alt="">
        <div class="holder text-center">
            <img class="logo" src="{{ asset( '/img/logo.png' ) }}" alt="">
            <h1>Linda Carlstad</h1>
            <h2>Linjeförening för datavetare</h2>
        </div>
    </header>

    <section class="about py-5">
        <div class="container">
            <div class="d-block row d-md-flex flex-md-row py-4">
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="{{ asset( '/img/logo.png' ) }}" alt="">
                </div>
                <br class="d-block d-md-none">
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="text-block">
                        <h3>Linda Carlstad</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </p>
                        <a class="btn btn-grey btn-expand" href="{{ route( 'about' ) }}">Läs mer</a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="d-block row d-md-flex flex-md-row-reverse py-4">
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="{{ asset( '/img/logo.png' ) }}" alt="">
                </div>
                <br class="d-block d-md-none">
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="text-block">
                        <h3>Linda Carlstad</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </p>
                        <a class="btn btn-grey btn-expand" href="{{ route( 'about' ) }}">Läs mer</a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="d-block row d-md-flex flex-md-row py-4">
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="{{ asset( '/img/logo.png' ) }}" alt="">
                </div>
                <br class="d-block d-md-none">
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="text-block">
                        <h3>Linda Carlstad</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                        <a class="btn btn-grey btn-expand" href="{{ route( 'about' ) }}">Läs mer</a>
                    </div>
                </div>
            </div>
            <br class="d-block d-md-none">
        </div>
    </section>

@endsection
