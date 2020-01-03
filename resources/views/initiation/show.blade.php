@section('title', 'Nollning ' . $initiation->year)
@extends('layouts.app')

@section('content')
    <h1>Nollning {{ $initiation->year }}</h1>
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
    <div class="d-block row d-md-flex py-4">
        <div class="col-12 text-center">
            <h3>Schema</h3>
        </div>
        @if( !$days->isEmpty() )
            <div class="col-md-10 offset-md-1">
                <div class="text-block">
                    @if( !$days )
                        <p>Vecka 1</p>
                    @endif
                    <ul class="list-group">
                        @php
                            $i = 0;
                        @endphp
                        @foreach( $days as $day )
                            <a href="{{ route( 'initiation.day.show', [$initiation->year, $day->slug] ) }}" class="list-group-item bg-dark">
                                {{ $day->title }} - {{ $day->date }}
                            </a>
                            @if( $i == 6 )
                    </ul>
                    <br>
                    <p>Vecka 2</p>
                    <ul class="list-group">
                        @endif
                        @php
                            $i += 1;
                        @endphp
                        @endforeach
                    </ul>
                </div>
            </div>
        @else
            <div class="col-12 text-center">
                <p class="text-center">Inga dagar tillagda.</p>
            </div>
        @endif
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-12 text-center">
            <h3>Information</h3>
            <br>
        </div>
        <div class="col-md-10 offset-md-1 d-flex align-items-center justify-content-center">
            <div class="initiation text-block">
                <p>
                    {!! nl2br( $initiation->description ) !!}
                </p>
                <p>
                    <b>Pris:</b>
                    @if( $initiation->show_price == true )
                        {{ $initiation->price }}kr
                    @else
                         Kommer snart
                    @endif
                </p>
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
                <br>
                <h4 class="text-center">Kontaktpersoner</h4>
                @if( $persons->isEmpty() )
                    <p class="text-center">Inga kontaktpersoner tillagda.</p>
                @else
                    <ul class="list-group">
                        @foreach( $persons as $person )
                            @if( $person->rank == 'General' )
                                <li class="list-group-item bg-dark">
                                    Namn: {{ $person->name }}
                                    <br>
                                    Rank: {{ $person->rank }}
                                    <br>
                                    Email: <a class="link" href="mailto:{{ $person->email }}">{{ $person->email }}</a>
                                    <br>
                                    Telefonnummer: <a class="link" href="tel:{{ $person->phone }}">{{ $person->phone }}</a>
                                </li>
                            @endif
                        @endforeach
                        @foreach( $persons as $person )
                            @if( $person->rank == 'Kapten' )
                                <li class="list-group-item bg-dark">
                                    Namn: {{ $person->name }}
                                    <br>
                                    Rank: {{ $person->rank }}
                                    <br>
                                    Email: <a class="link" href="mailto:{{ $person->email }}">{{ $person->email }}</a>
                                    <br>
                                    Telefonnummer: <a class="link" href="tel:{{ $person->phone }}">{{ $person->phone }}</a>
                                </li>
                            @endif
                        @endforeach
                        @foreach( $persons as $person )
                            @if( $person->rank !== 'General' && $person->rank !== 'Kapten' )
                                <li class="list-group-item bg-dark">
                                    Namn: {{ $person->name }}
                                    <br>
                                    Rank: {{ $person->rank }}
                                    <br>
                                    Email: <a class="link" href="mailto:{{ $person->email }}">{{ $person->email }}</a>
                                    <br>
                                    Telefonnummer: <a class="link" href="tel:{{ $person->phone }}">{{ $person->phone }}</a>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                @endif
            </div>
        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningar.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation' ) }}">Nollningar</a>
    </div>

@endsection
