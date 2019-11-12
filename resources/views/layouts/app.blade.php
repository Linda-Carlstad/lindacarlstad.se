<!DOCTYPE html>
<html lang="{{ str_replace( '_', '-', app()->getLocale() ) }}">
<head>
    @include( 'layouts.partials.head' )
</head>
<body>

    @include( 'layouts.partials.navbar' )

    <main class="content">
        @if( Request::is( '/' ) )
            @yield( 'content' )
        @else
            <div class="container-fluid mt-md-5 py-4 py-md-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        @include( 'layouts.partials.flash-messages' )

                        @yield( 'content' )
                        <br>
                    </div>
                </div>
            </div>
        @endif
    </main>

    @include( 'layouts.partials.footer' )
</body>

</html>
