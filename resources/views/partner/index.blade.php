@section('title', 'Partners')
@extends('layouts.app')

@section('content')
    <h1>Partners</h1>
    <hr>
    <div class="col-12">
        <p>
            Här är alla våra olika typer av partners, sponsorer och samarbetspartners.
            <br><br>
            Antal Partners: {{ $partners->count() }}
        </p>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $partners->isEmpty() )
                <p class="text-center">Inga Partners tillagda.</p>
            @endif
            <ul class="list-group col-md-8 offset-md-2">
                @foreach( $partners as $partner )
                    <a href="{{ route( 'partner.show', $partner->slug ) }}" class="list-group-item bg-dark">
                        {{ $partner->name }}
                    </a>
                @endforeach
            </ul>
        </div>
    </div>

@endsection
