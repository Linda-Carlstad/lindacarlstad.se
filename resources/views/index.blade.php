@section('title', 'Hem')
@extends('layouts.app')
@section('content')

        <div class="row justify-content-center">
            <div class="col-md-8">
            @foreach(Auth::user()->exams as $exam)
                <div class="bg-dark p-3">
                    <h1>{{ $exam->name }}</h1>
                    <p>
                        {{ $exam->document }}
                        <br>
                        {{ $exam->user->name  }}
                    </p>
                </div>
                <br>
            @endforeach
            </div>
        </div>

@endsection
