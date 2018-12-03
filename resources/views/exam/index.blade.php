@section('title', 'Tenta')
@extends('layouts.app')
@section('content')

    @foreach($exams as $exam)
        {{$exam->name}}
    @endforeach
        

@endsection