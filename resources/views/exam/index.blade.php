@section('title', 'Tenta')
@extends('layouts.app')
@section('content')
@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif


<h4>Ladda upp era gamla tentor</h4>
<form action="{{route('exam.store')}}" method="POST" enctype="multipart/form-data">

    {{csrf_field()}}
    <input type="file" name="file"><br>
    <input type="submit" class="btn btn-info" value="Upload">


@endsection
