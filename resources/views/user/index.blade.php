@section( 'title', 'Profil' )
@extends( 'layouts.app' )
@section( 'content' )

    @auth
        <div class="">
            <h1>Welcome back {{ Auth::user()->name }}</h1>
        </div>
    @endauth

@endsection
