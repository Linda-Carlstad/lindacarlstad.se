@section('title', 'Email verifierad')
@extends('layouts.app')
@section('content')

    <p>{{ Auth::user()->email }} är nu verifierad.</p>

@endsection
