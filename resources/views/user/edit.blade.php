@section( 'title', 'Profil' )
@extends( 'layouts.app' )
@section( 'content' )

    <div class="text-center">
        <h4>{{ Auth::user()->name }}</h4>
    </div>

    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="name">
        <label for="name">Name:</label>
        <br>
        <input type="text" name="name" value="" placeholder="Name">
        <br>
        <br>
        <button type="submit" name="button">Send</button>
    </form>
    <hr>
    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="email">
        <label for="email">Email:</label>
        <br>
        <input type="text" name="email" value="" placeholder="email">
        <br>
        <label for="emailPassword">Current Password:</label>
        <br>
        <input type="text" name="emailPassword" value="" placeholder="password">
        <br>
        <br>
        <button type="submit" name="button">Send</button>
    </form>
    </form>
    </form>
    <hr>
    <form class="" action="/user/{{ Auth::user()->id }}" method="post">
        @csrf
        {{ method_field( 'patch' ) }}
        <input type="hidden" name="type" value="password">
        <label for="oldPassword">Current Password:</label>
        <br>
        <input type="text" name="oldPassword" value="" placeholder="password">
        <br>
        <label for="password">New Password:</label>
        <br>
        <input type="text" name="password" value="" placeholder="password">
        <br>
        <label for="newPassword">New Password:</label>
        <br>
        <input type="text" name="newPassword" value="" placeholder="password">
        <br>
        <br>
        <button type="submit" name="button">Send</button>
    </form>

@endsection
