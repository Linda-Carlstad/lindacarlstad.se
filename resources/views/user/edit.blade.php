@section( 'title', 'Profil' )
@extends( 'layouts.app' )
@section( 'content' )

@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif

    <div class="text-center">
        <h3>{{ Auth::user()->name }}</h3>
    </div>
    <hr>
    <h4>Ändra namn</h4>
    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="name">
        <div class="form-group">
            <label for="name">Namn:</label>
            <input type="text" class="form-control col-md-6" name="name" value="" placeholder="Name">
        </div>
        <button type="submit" class="btn btn-grey btn-expand">Send</button>
    </form>
    <br>
    <h4>Ändra email</h4>
    <hr>
    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="email">
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control col-md-6" name="email" value="" placeholder="Email">
        </div>

        <div class="form-group">
            <label for="emailPassword">Current Password:</label>
            <input type="password" class="form-control col-md-6" name="emailPassword" value="" placeholder="Lösenord">
        </div>
        <button type="submit" class="btn btn-grey btn-expand">Send</button>
    </form>
    <hr>
    <h4>Ändra lösenord</h4>
    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="password">
        <div class="form-group">
            <label for="currentPassword">Current Password:</label>
            <input type="password" class="form-control col-md-6" name="currentPassword" value="" placeholder="Lösenord">
        </div>
        <div class="form-group">
            <label for="password">New Password:</label>
            <input type="password" class="form-control col-md-6" name="password" value="" placeholder="Lösenord">
        </div>
        <div class="form-group">
            <label for="confirmPassword">New Password:</label>
            <br>
            <input type="password" class="form-control col-md-6" name="confirmPassword" value="" placeholder="Lösenord">
        </div>
        <button type="submit" class="btn btn-grey btn-expand">Send</button>
    </form>
    <hr>
    <h4>Ändra personnummer</h4>
    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="idNumber">
        <div class="form-group">
            <label for="idNumber">Personnummer:</label>
            <input type="text" class="form-control col-md-6" name="idNumber" value="" placeholder="Lösenord">
        </div>
        <button type="submit" class="btn btn-grey btn-expand">Send</button>
    </form>
@endsection