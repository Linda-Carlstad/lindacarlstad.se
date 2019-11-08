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
            <div class="container-fluid mt-5 py-4 py-md-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
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
