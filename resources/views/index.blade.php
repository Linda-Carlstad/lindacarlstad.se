@section('title', 'Hem')
@extends('layouts.app')
@section('content')

        <div class="row justify-content-center">
            <div class="col-md-8">
            @foreach(Auth::user()->exams as $exam)
                <h1>{{ $exam->name }}</h1>
            @endforeach
            </div>
        </div>

@endsection
