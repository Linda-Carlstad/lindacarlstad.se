@extends( 'layouts.app' )
@section( 'content' )

    <section class="error-message d-flex align-items-center justify-content-center">
        <div class="error-terminal col-12">
            <header>
                <a aria-label="Return to landing page" href="{{ url( '/' ) }}" class="button red"></a>
                <a aria-label="Go to program page" href="{{ route( 'programs' ) }}" class="button yellow"></a>
                <a aria-label="Go to about page" href="{{ route( 'about' ) }}" class="button green"></a>
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
    <small class="muted pl-3">Powered by <a class="link" href="https://mattboldt.com/" rel="noreferrer">mattboldt</a>...</small>

@endsection
