@section('title', 'Hem')
@extends('layouts.app')

@section('content')

        <div class="row justify-content-center">
            <div class="col-md-8">
            {{Auth::user()->exams}}
            @foreach(Auth::user()->exams as $exam)
            <p>$exam->name</p>
            @endforeach
            </div>
        </div>

@endsection
