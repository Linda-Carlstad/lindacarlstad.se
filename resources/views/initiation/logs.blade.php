@section('title', 'Loggar')
@extends('layouts.app')

@section('content')

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

@endsection