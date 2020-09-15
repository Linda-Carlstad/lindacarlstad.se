@section('title', 'Sånger')
@extends('layouts.app')

@section('content')
    <h1>Sånger</h1>
    <hr>
    <div class="col-12">
        <p>
            En samling med sånger som vi i LINDA sjunger, på nollning och inte.
            <br><br>
            Antal sånger: {{ $total }}
        </p>
    </div>
        {--
        @if( !$songs->isEmpty() || isset( $search ) )
            <form class="col-md-8 offset-md-2 mt-2" action="{{ '/sånger' }}" method="get">
                @csrf

                <div class="form-group row">
                    <div class="input-group">
                        <input id="search" type="text" placeholder="Sök.." class="form-control{{ $errors->has('search') ? ' is-invalid' : '' }}" name="search" value="{{ isset( $search ) ? $search : "" }}" autofocus>
                        @if ($errors->has('search'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('search' ) }}</strong>
                            </span>
                        @endif
                        <div class="input-group-append">
                            <button type="submit" name="button" class="btn btn-grey btn-file">Sök</button>
                        </div>
                    </div>
                </div>
            </form>
        @endif
    </div>
    <div class="text-center">
        @if( isset( $search ) )
            <h4>Du sökte på: <i>{{ $search }}</i></h4>
            <h5>Antal resultat: <i>{{ $totalSearch }}</i></h5>
        @endif
    </div>
    --}
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $songs->isEmpty() )
                <p class="text-center">Inga sånger hittade.</p>
            @endif
            <ul class="list-group col-md-8 offset-md-2">

                @foreach( $songs as $song )
                    <a href="{{ route( 'song.show', $song->slug ) }}" class="list-group-item bg-dark">
                        {{ $song->title }}
                    </a>
                @endforeach
            </ul>
        </div>
    </div>

    <div class="d-flex justify-content-center">
        {{ $songs->links() }}
    </div>
    @if( isset( $search ) )
        <hr>
        <div class="text-center">
            <a class="btn btn-grey btn-expand" href="{{ route( 'song' ) }}">Visa alla</a>
        </div>
    @endif
    <hr>
    <div class="text-center">
        <a class="btn btn-grey" href="{{ route( 'song.gate' ) }}">Gömda låtar</a>
    </div>

@endsection
