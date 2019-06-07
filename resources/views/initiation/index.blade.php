@section('title', 'Nollning')
@extends('layouts.app')

@section('content')
    <h1>Nollning {{ date( 'Y' ) }}</h1>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/logo.png' ) }}" alt="Linda Carlstad logga med text">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center justify-content-center">
            <div class="text-block">
                <h3>Nollning med Linda Carlstad</h3>
                <p>
                    Nollningen är en tradition i vår förening som vi anordnar varje år för nya studenter, det är ett
                    tillfälle att kickstarta ditt studentliv och lära känna andra studenter som börjar sitt första år här på
                    Karlstads universitet men även bygga kontakter med dem som redan pluggat ett år eller mer.
                    Syftet med nollningen är att skapa en gemenskap mellan er studenter och för att ni ska känna
                    en trygghet under resten av er studietid. Även om tentorna inte riktigt går som tänkt och
                    misslyckas har man att gäng goa vänner att falla tillbaka på.
                </p>
            </div>
        </div>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            <h3>Schema</h3>
            @if( $days->isEmpty() )
                <p class="text-center">Inga dagar tillagda.</p>
            @endif
            <ul class="list-group col-md-8 offset-md-2">

                @foreach( $days as $day )
                    <a href="{{ route( 'initiation.show', $day->slug ) }}" class="list-group-item bg-dark">
                        {{ $day->title }}
                    </a>
                @endforeach
            </ul>
        </div>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-12 text-center">
            <h3>Information</h3>
            <br>
        </div>
        <div class="col-md-8 offset-md-2 d-flex align-items-center justify-content-center">
            <div class="text-block">
                <p>
                    {!! nl2br( $information->description ) !!}
                </p>
                @if( $information->showPrice == true )
                    <p><b>Pris:</b> {{ $information->price }}kr</p>
                @else
                    <p><b>Pris:</b> Kommer snart</p>

                @endif
                <hr>
                <h4 class="text-center">Bra tips</h4>
                <ul class="list-group">
                    <li class="list-group-item bg-dark">
                        Ät ordentligt
                    </li>
                    <li class="list-group-item bg-dark">
                        Drick mycket vatten
                    </li>
                    <li class="list-group-item bg-dark">
                        Köp <a class="link" href="https://karlstad.se/Karlstadsbuss/">busskort</a> (2 veckor)
                    </li>
                    <li class="list-group-item bg-dark">
                        Gå med i <a class="link" href="http://www.karlstadstudentkar.se/">Karlstads studentkår</a> (flera fester behöver medlemskapet)
                    </li>
                    <li class="list-group-item bg-dark">
                        Kläder efter väder
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 mt-3">
            <h4 class="text-center">Kontaktpersoner</h4>
            @if( $keyPeople->isEmpty() )
                <p class="text-center">Inga kontaktpersoner tillagda.</p>
            @else
                <ul class="list-group col-md-8 offset-md-2">
                    @foreach( $keyPeople as $keyPerson )
                        @if( $keyPerson->rank == 'General' )
                            <li class="list-group-item bg-dark">
                                Namn: {{ $keyPerson->name }}
                                <br>
                                Rank: {{ $keyPerson->rank }}
                                <br>
                                Email: <a class="link" href="mailto:{{ $keyPerson->email }}">{{ $keyPerson->email }}</a>
                                <br>
                                Telefonnummer: <a class="link" href="tel:{{ $keyPerson->phone }}">{{ $keyPerson->phone }}</a>
                            </li>
                        @endif
                    @endforeach
                    @foreach( $keyPeople as $keyPerson )
                        @if( $keyPerson->rank == 'Kapten' )
                            <li class="list-group-item bg-dark">
                                Namn: {{ $keyPerson->name }}
                                <br>
                                Rank: {{ $keyPerson->rank }}
                                <br>
                                Email: <a class="link" href="mailto:{{ $keyPerson->email }}">{{ $keyPerson->email }}</a>
                                <br>
                                Telefonnummer: <a class="link" href="tel:{{ $keyPerson->phone }}">{{ $keyPerson->phone }}</a>
                            </li>
                        @endif
                    @endforeach
                    @foreach( $keyPeople as $keyPerson )
                        @if( $keyPerson->rank !== 'General' && $keyPerson->rank !== 'Kapten' )
                            <li class="list-group-item bg-dark">
                                Namn: {{ $keyPerson->name }}
                                <br>
                                Rank: {{ $keyPerson->rank }}
                                <br>
                                Email: <a class="link" href="mailto:{{ $keyPerson->email }}">{{ $keyPerson->email }}</a>
                                <br>
                                Telefonnummer: <a class="link" href="tel:{{ $keyPerson->phone }}">{{ $keyPerson->phone }}</a>
                            </li>
                        @endif
                    @endforeach
                </ul>
            @endif
        </div>
    </div>

@endsection
