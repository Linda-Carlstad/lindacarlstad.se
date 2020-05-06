@extends( 'layouts.app' )
@section( 'content' )

    <section class="error-message d-flex align-items-center justify-content-center">
        <div class="error-terminal col-12">
            <header>
                <a href="{{ url( '/' ) }}" class="button red"></a>
                <a href="{{ route( 'programs' ) }}" class="button yellow"></a>
                <a href="{{ route( 'about' ) }}" class="button green"></a>
            </header>
            <div class="noise"></div>
            <div class="overlay"></div>

            <div class="terminal">
                <p class="d-none" id="error-id">@yield( 'code' )</p>
                <p>
                    <b>> Error: @yield( 'code' )</b>
                    <br>
                    <span id="error-message"></span>
                </p>
            </div>
        </div>
    </section>

@endsection
