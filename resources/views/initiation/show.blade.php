@section('title', 'Nollning ' . $initiation->year)
@extends('layouts.app')

@section('content')

    @if( !$logs->isEmpty() )
        @include( 'initiation.partials.logs', $logs )
    @endif
    <h1>Nollning {{ $initiation->year }}</h1>
    <hr>
    <div class="d-block row d-md-flex flex-md-row py-4">
        <div class="col-md-5 d-flex align-items-center justify-content-center">
            <img class="img-fluid" src="{{ asset('/img/logo.png' ) }}" alt="Linda Carlstad logga med text">
        </div>
        <br class="d-block d-md-none">
        <div class="col-md-7 d-flex align-items-center justify-content-center">
            <div class="text-block">
                <h3>Nollning med {{ config( 'app.name' ) }}</h3>
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
                    @if( $days )
                        <p>Vecka 1</p>
                    @endif
                    <ul class="list-group">
                        @php
                            $i = 0;
                        @endphp
                        @foreach( $days as $day )
                            <a href="{{ route( 'initiation.day.show', [$initiation->year, $day->slug] ) }}" class="list-group-item bg-dark text-center">
                                {{ $day->title }}
                                @if( $day->date )
                                     - {{ Carbon\Carbon::parse($day->date)->translatedFormat( 'd F' ) }}
                                @endif
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
                    @if( $initiation->description )
                            {!! nl2br( $initiation->description ) !!}
                    @else
                        Information kommer snart.
                    @endif
                    @if( $initiation->facebook_group )
                        <br>
                        Facebook-grupp: <a href="{{ $initiation->facebook_group }}" class="link" rel=”noreferrer” target="_blank">{{ $initiation->facebook_group }}</a>
                    @endif
                </p>
                <p>
                    <b>Pris:</b>
                    @if( $initiation->show_price == true )
                        {{ $initiation->price }}kr
                    @else
                         Kommer snart.
                    @endif
                </p>
                @if( $initiation->playlist )
                    <hr>
                    <h4 class="text-center">Året spellista</h4>
                        <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="{{ $initiation->playlist }}" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
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
                <hr>
                <h4 class="text-center">Kontaktpersoner</h4>
                @if( $persons->isEmpty() )
                    <p class="text-center">Inga kontaktpersoner tillagda.</p>
                @else
                    <ul class="list-group">
                        @foreach( $persons as $person )
                            @if( $person->rank == 'General' )
                                @include( 'initiation.partials.contact', $person )
                            @endif
                        @endforeach
                        @foreach( $persons as $person )
                            @if( $person->rank == 'Kapten' )
                                @include( 'initiation.partials.contact', $person )
                            @endif
                        @endforeach
                        @foreach( $persons as $person )
                            @if( $person->rank !== 'General' && $person->rank !== 'Kapten' )
                                @include( 'initiation.partials.contact', $person )
                            @endif
                        @endforeach
                    </ul>
                @endif
            </div>
        </div>
    </div>

    <div class="text-center">
        <p>Är du intresserad av att veta vad som har ändrats?
            <a title="Nollning {{ $initiation->year }} loggar" class="link"
               href="{{ route( 'initiation.logs', $initiation->year ) }}">Klicka här</a> för att se loggarna.
        </p>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningar.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation' ) }}">Nollningar</a>
    </div>

@endsection
