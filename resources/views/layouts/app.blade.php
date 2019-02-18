<!DOCTYPE html>
<html lang="{{ str_replace( '_', '-', app()->getLocale() ) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config( 'app.name', 'Linda Carlstad' ) }} - @yield('title')</title>
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <link href="{{ asset( '/css/main.min.css' ) }}" rel="stylesheet">
        <link href="{{ asset( '/img/icon.ico' ) }}" rel="icon">
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top scrolling-navbar">
            <div class="container-fluid">
                <a class="navbar-brand d-block d-md-none" href="{{ url( '/' ) }}">
                    <img class="" src="img/small-logo.png" alt="Golden apple with crown">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav w-100">
                      <li class="nav-item">
                          <a class="nav-link" href="{{ url( '/' ) }}">Hem <span class="sr-only">(current)</span></a>
                      </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route( 'about' ) }}">Föreningen</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route( 'initiation' ) }}">Nollning</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://lindacarlstad.tictail.com/">Webbshop</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav justify-content-center">
                        <li class="nav-item d-none d-md-block">
                            <a class="navbar-brand" href="{{ url( '/' ) }}">
                                <img src="{{ asset( 'img/small-logo.svg') }}" alt="Golden apple with crown">
                            </a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav w-100 justify-content-end">
                      <li class="nav-item">
                          <a class="nav-link" href="{{ route( 'news' ) }}">Nyheter</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="http://tentahub.se/linda">Tentor</a>
                      </li>
                      @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route( 'login' ) }}">{{ __( 'Logga in' ) }}</a>
                        </li>
                        <li class="nav-item">
                            @if ( Route::has( 'register' ) )
                                <a class="nav-link" href="{{ route( 'register' ) }}">{{ __( 'Registrera' ) }}</a>
                            @endif
                        </li>
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item bg-dark" href="{{ route( 'profile' ) }}">Profil</a>
                                <a class="dropdown-item bg-dark" href="{{ route( 'logout' ) }}"
                                    onclick="event.preventDefault();
                                    document.getElementById( 'logout-form' ).submit();">
                                {{ __( 'Logga ut' ) }}
                                </a>
                                <form id="logout-form" action="{{ route( 'logout' ) }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="content">
            @if( Request::is( '/' ) )
                @yield( 'content' )
            @else
                <div class="container py-5 mt-5">
                    @yield( 'content' )
                </div>
            @endif
        </main>

        <footer class="footer py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 d-none d-md-block text-center">
                        <a href="">
                        <img src="img/logo.png" alt="Linda Carlstad logo">
                        </a>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <span>Kontakt</span>
                            <br>
                            <a href="{{ route( 'contact' ) }}">Kontakta oss</a>
                            <br>
                            <a href="mailto:info@lindacarlstad.se">info@lindacarlstad.se</a>
                            <br>
                            Universitetsgatan 2
                            <br>
                            651 68 Karlstad
                            <br>
                            <a href="{{ url( 'whoops' ) }}" class="special">Whoops</a>
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <span>Länkar</span>
                            <br>
                            <a href="http://tentahub.se/linda">Tentor</a>
                            <br>
                            <a href="http://lindacarlstad.se/robot/terminal.html">Terminal</a>
                            <br>
                            <!-- <a href="events.php">Event</a>
                                <br> -->
                            <a href="{{ route( 'document' ) }}">Dokument</a>
                            <br>
                            <a href="http://lindacarlstad.tictail.com/">Webbshop</a>
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <span>Föreningen</span>
                            <br>
                            <a href="{{ route( 'about' ) }}">Om oss</a>
                            <br>
                            <a href="{{ route( 'new-member' ) }}">Bli medlem</a>
                            <br>
                            <a href="{{ route( 'secret' ) }}" class="special">Secret</a>
                        </p>
                    </div>
                </div>
                <div class="container">
                    <div class="row social-footer-icons justify-content-center">
                      <a href="https://www.facebook.com/linda.carlstad/"><i class="fab fa-facebook"></i></a>
                      <br>
                      <a href="https://www.instagram.com/lindacarlstad/"><i class="fab fa-instagram"></i></a>
                      <br>
                      <a href="https://github.com/Linda-Carlstad"><i class="fab fa-github"></i></a>
                      <br>
                      <br>
                      <a href="https://discordapp.com/invite/u8eNCPk?fbclid=IwAR27Zd8nVHtKmW9_qmoT2WHotDFNkNtgcxJ-M1b1xvb1dZa6avDG9QfTYho"><i class="fab fa-discord"></i></a>
                      <br>
                      <br>
                      <a href="https://www.linkedin.com/company/linda-carlstad/about/"><i class="fab fa-linkedin"></i></a>
                      <br>
                    </div>
                  </div>
                </div>
                <div class="footer-copyright">
                  <br>
                  <small>Copyright © 2019 - All Rights Reserved - Studentföreningen Linda Carlstad</small>
                </div>
            </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>
        <script src="{{ asset( '/js/main.js' ) }}" type="text/javascript" defer></script>
        <script src="{{ asset( '/js/swiper.js' ) }}" type="text/javascript" defer></script>
    </body>
</html>
