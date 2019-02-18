@extends( 'layouts.app' )
@section( 'title', '429' )
@section( 'content' )

    <section class="error-message d-flex align-items-center justify-content-center">
        <div class="text-center">
            <h1>För många förfrågningar</h1>
            <p>
                Servern har tagit emot för många förfrågningar, vänligen vänta lite och försök igen.
            </p>
        </div>
    </section>

@endsection
