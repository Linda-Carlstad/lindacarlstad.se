@section('title', 'Loggar')
@extends('layouts.app')

@section('content')

    <h1>Nollning {{ $initiation->year }} - Loggar</h1>
    <hr>
    <div class="col-12">
        <p>
            Här kan du se alla ändringar som gjorts under nollningen {{ $initiation->year }}.
            <br>
            Denna sida finns bara för att det är kul att visa data, coolt va?
        </p>
    </div>
    <hr>
    <div class="d-block row d-md-flex flex-md-row-reverse py-4">
        <div class="col-12 text-center">
            @if( $logs->isEmpty() )
                <p>Inga loggar tillgängliga just nu.</p>
            @else
                <ul class="list-group">
                    @foreach( $logs as $log )
                        <li class="list-group-item bg-dark">
                            <b>{{ ucfirst( __( 'status.' . $log->action ) ) }} ({{ Carbon\Carbon::parse( $log->date )->diffForHumans() }})</b>
                            @foreach( json_decode( $log->data, true ) as $when => $attributes )
                                @if( $when === 'after' )
                                    @php
                                        $i = 0;
                                        $length = count( $attributes )
                                    @endphp
                                    <br>
                                    @foreach( $attributes as $attribute => $value )
                                        {{ ucfirst( __( 'initiation.' . $attribute ) ) }}:
                                        @if( $attribute === 'initiation_id' )
                                            {{ App\Initiation::find( $value )->first()->year }}
                                        @else
                                            {{ $value }}
                                        @endif
                                        @if( $i != $length - 1 )
                                            <br>
                                        @endif
                                        @php
                                            $i++;
                                        @endphp
                                    @endforeach
                                @endif
                            @endforeach
                        </li>
                    @endforeach
                </ul>
            @endif
        </div>
    </div>
    <hr>
    <div class="text-center">
        <p>Klicka nedan för att gå tillbaks till nollningsschema.</p>
        <a class="btn btn-grey" href="{{ route( 'initiation.show', $initiation->year ) }}">Nollning {{ $initiation->year }}</a>
    </div>


@endsection