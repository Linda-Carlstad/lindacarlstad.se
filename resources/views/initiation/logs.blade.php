@section('title', 'Loggar')
@extends('layouts.app')

@section('content')

    @include( 'initiation.partials.logs', $logs )

@endsection