<!DOCTYPE html>
<html lang="{{ str_replace( '_', '-', app()->getLocale() ) }}">
<head>
    @include( 'layouts.head' )
</head>
<body>

    @include( 'layouts.nav' )

    <main class="content">
        @if( Request::is( '/' ) )
            @yield( 'content' )
        @else
            <div class="container-fluid mt-md-5 py-4 py-md-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        @include( 'layouts.flash-messages' )

                        @yield( 'content' )
                        <br>
                    </div>
                </div>
            </div>
        @endif
    </main>

    @include( 'layouts.footer' )
</body>

</html>
