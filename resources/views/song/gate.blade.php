@section('title', 'Hemliga sånger?')
@extends('layouts.app')

@section('content')
    <script>
        grecaptcha.ready(function() {
            grecaptcha.execute( '{{ env( 'GOOGLE_RECAPTCHA_KEY' ) }}', { action: 'secret_songs' } ).then( function( token )
            {
                if( token )
                {
                    document.getElementById( 'recaptcha' ).value = token;
                }
            });
        });
    </script>
    <div class="text-center">
        <h1>Stopp!</h1>
        <p>Du behöver en kod för att komma vidare</p>
    </div>
    <hr>
    <form class="col-md-8 offset-md-2" action="{{ route( 'song.secret' ) }}">
        @csrf
        <input type="hidden" id="recaptcha" name="recaptcha">
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-append">
                    <span class="input-group-text grey" id="basic-addon3">Kod:</span>
                </div>
                <input type="text" class="form-control" id="code" name="code" required value="{{ old( 'code' ) }}">
                <div class="input-group-append">
                    <button type="submit" name="button" class="btn btn-grey btn-file">Skicka</button>
                </div>
            </div>
            @if ($errors->has('code'))
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('code' ) }}</strong>
                </span>
            @endif
            <small>
                Denna webbplats är skyddad av reCAPTCHA och Googles
                <a class="link" href="https://policies.google.com/privacy">sekretesspolicy</a> och
                <a class="link" href="https://policies.google.com/terms">användarvillkor</a> gäller.</small>
        </div>
    </form>
    <hr>
    <div class="text-center">
        <p>Tillbaka till sångerna</p>
        <a href="{{ route( 'song' ) }}" class="btn btn-grey">Sånger</a>
    </div>

@endsection