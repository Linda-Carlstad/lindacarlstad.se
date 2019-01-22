@section( 'title', 'Kontaktformulär' )
@extends( 'layouts.mail' )
@section( 'content' )

    <h3>{{ $request->subject }}</h3>
    <p>{{ $request->name }}</p>
    <br>
    <p>{{ $request->message }}</p>

@endsection
