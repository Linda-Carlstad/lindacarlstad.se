@section( 'title', 'Verifiera email' )
@extends( 'layouts.mail' )
@section( 'content' )

    <h3>Hello {{ $user->username }}</h3>
    <p>
        Verifiering av mail byte, {{ $user->email }}
    </p>

@endsection
