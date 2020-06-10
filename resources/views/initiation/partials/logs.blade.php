<div class="d-block row d-md-flex py-4 px-2">
    @foreach( $logs as $log )
        <div class="col-12 mx-2 alert alert-danger alert-dismissible fade show" role="alert">
            <b>{{ ucfirst( __( 'status.' . $log->action ) ) }} ({{ Carbon\Carbon::parse( $log->date )->diffForHumans() }})</b>
            @foreach( json_decode( $log->data, true ) as $when => $attributes )
                @if( $when === 'after' )
                    @php
                        $i = 0;
                        $length = count( $attributes )
                    @endphp
                    <br>

                @foreach( $attributes as $attribute => $value )
                            {{ ucfirst( __( 'initiation.' . $attribute ) ) }}: {{ $value }}
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
</div>