@if( session()->has( 'success' ) )
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ session()->get( 'success' ) }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
@endif

@if( session()->has( 'error' ) )
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ session()->get( 'error' ) }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
@endif

@if( session()->has( 'event' ) )
    @foreach( session()->get( 'event' ) as $event )
        <div class="alert alert-danger fade show text-center" role="alert">
            {{ $event->text }}
            @if( $event->link && $event->link_title )
                - <a class="link" target="_blank" href="{{ $event->link }}">{{ $event->link_title }}</a>
            @endif
        </div>
    @endforeach
@endif