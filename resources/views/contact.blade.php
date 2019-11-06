@section('title', 'Kontakt')
@extends('layouts.app')

@section('content')

    <h1 class="text-center">Kontakta oss</h1>
    <hr>
    <div class="py-4">
        <form method="POST" action="/contactForm">
            @csrf
            <div class="form-group row">
                <label for="name" class="col-sm-4 col-form-label text-md-right">Namn</label>

                <div class="col-md-6">
                    <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                    @if ($errors->has('name'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group row">
                <label for="subject" class="col-sm-4 col-form-label text-md-right">Ämne</label>

                <div class="col-md-6">
                    <input id="subject" type="subject" class="form-control{{ $errors->has('subject') ? ' is-invalid' : '' }}" name="subject" value="{{ old('subject') }}" required autofocus>

                    @if ($errors->has('subject'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('subject') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group row">
                <label for="email" class="col-sm-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group row">
                <label for="message" class="col-sm-4 col-form-label text-md-right">Meddelande</label>

                <div class="col-md-6">
                    <textarea id="message" type="textarea" class="form-control{{ $errors->has('message') ? ' is-invalid' : '' }}" name="message" value="{{ old('message') }}" required></textarea>

                    @if ($errors->has('message'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('message') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="col-md-8 offset-md-4">
                    <small>Vi sparar inga uppgifter.</small>
                </div>
            </div>
            <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-grey">
                      {{ __('Skicka') }}
                  </button>
              </div>
            </div>
        </form>
    </div>

@endsection
