@foreach( $logs as $log )
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
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
                        {{ strlen( $value ) > 120 ? substr( $value, 0, strpos( $value,' ', 30 ) ) . '...' : $value }}
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
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
@endforeach
