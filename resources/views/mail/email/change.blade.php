@section( 'title', 'Verifiera email' )
@extends( 'layouts.mail' )
@section( 'content' )

    <h3>Hello {{ $user->username }}</h3>
        <p>
            Is this your new email you want to use? If it is, then click on
            the link below so we can verify that. :)
        </p>
        <br>
        <a class=""
            href="{{ url( 'verifiering-email?code=' . $code . '&email=' . $email ) }}">
            Link boiii
        </a>

@endsection
