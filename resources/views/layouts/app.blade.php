<!DOCTYPE html>
<html lang="{{ str_replace( '_', '-', app()->getLocale() ) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="Utbildning, Utbildningar, Förening, Föreningar, Studentförening, Studentföreningar, Webbutvecklare, Webbutveckling, Data, Dataingenjör, IT-design">
    <meta name="description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student, såväl att du har det bra på universitet som på fritiden, utbildningen kommer inte alltid att vara rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna om det så krävs eller med att bara ta det lugnt och umgås.">
    <meta name="subject" content="Social">
    <meta name="image" content="https://lindacarlstad.se/img/logo.png">
    <meta name="copyright" content="Linda Carlstad">
    <meta name="language" content="{{ str_replace( '_', '-', app()->getLocale()) }}">
    <meta name="robots" content="index, follow">
    <meta name="Classification" content="Business">
    <meta name="author" content="Linda Carlstad">
    <meta name="designer" content="Linda Carlstad">
    <meta name="copyright" content="Linda Carlstad">
    <meta name="reply-to" content="info@lindacarlstad.se">
    <meta name="owner" content="Linda Carlstad">
    <meta name="url" content="https://www.lindacarlstad.se">
    <meta name="identifier-URL" content="https://www.lindacarlstad.se">
    <meta name="coverage" content="Worldwide">
    <meta name="distribution" content="Global">
    <meta name="rating" content="General">
    <meta name="revisit-after" content="7 days">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="canonical" href="{{ Request::url() }}">
    <link rel="home" href="{{ Request::url() }}">
    <link rel="alternate" hreflang="x-default" href="{{ Request::url() }}">

    <!-- Schema.org for Google -->
    <meta itemprop="name" content="Linda Carlstad">
    <meta itemprop="description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student, såväl att du har det bra på universitet som på fritiden, utbildningen kommer inte alltid att vara rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna om det så krävs eller med att bara ta det lugnt och umgås.">
    <meta itemprop="image" content="https://lindacarlstad.se/img/logo.png">
    <!-- Twitter -->
    <meta name="twitter:card" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student, såväl att du har det bra på universitet som på fritiden, utbildningen kommer inte alltid att vara rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna om det så krävs eller med att bara ta det lugnt och umgås.">
    <meta name="twitter:title" content="Linda Carlstad">
    <meta name="twitter:description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student, såväl att du har det bra på universitet som på fritiden, utbildningen kommer inte alltid att vara rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna om det så krävs eller med att bara ta det lugnt och umgås.">
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="Linda Carlstad">
    <meta name="og:description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student, såväl att du har det bra på universitet som på fritiden, utbildningen kommer inte alltid att vara rolig eller lätt och då hoppas vi att vi kan vara till din hjälp med studierna om det så krävs eller med att bara ta det lugnt och umgås.">
    <meta name="og:image" content="https://lindacarlstad.se/img/logo.png">
    <meta name="og:url" content="https://lindacarlstad.se">
    <meta name="og:site_name" content="Linda Carlstad">
    <meta name="og:locale" content="{{ str_replace( '_', '-', app()->getLocale()) }}">
    <meta name="og:type" content="website">

    <title>{{ config( 'app.name', 'Linda Carlstad' ) }} - @yield( 'title')</title>
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="{{ asset( '/css/main.min.css' ) }}" rel="stylesheet">
    <link href="{{ asset( '/img/icon.ico' ) }}" rel="icon">

    <script src="https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js" async></script>
    <script>
        var galite = galite || {};
        galite.UA = 'UA-136489552-1';
    </script>

    <script defer src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>
    <script defer src="{{ asset( '/js/main.js' ) }}" type="text/javascript"></script>
    <script defer src="{{ asset( '/js/swiper.js' ) }}" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
    <script>
    window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#343a40"
        },
        "button": {
          "background": "#660023",
          "color": "#fff"
        }
    },
      "content": {
		"message": "Den här webbplatsen använder cookies för att du ska få den bästa upplevelsen på vår hemsida.",
		"dismiss": "Uppfattat!",
		"link": "Läs mer"
	  }
    })});
    </script>
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top scrolling-navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ url( '/' ) }}">
                <img class="" src="{{ asset( 'img/small-logo.png') }}" alt="Golden apple with crown">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url( '/' ) }}">Start<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'programs' ) }}">Program</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'about' ) }}">Föreningen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'initiation' ) }}">Nollning {{ date( 'Y' ) }}</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'song' ) }}">Sånger</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'document' ) }}">Dokument</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'news' ) }}">Nyheter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://tentahub.se/linda">Tentor</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="content">
        @if( Request::is( '/' ) )
            @yield( 'content' )
        @else
            <div class="container-fluid mt-5 py-4 py-md-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        @yield( 'content' )
                        <br>
                    </div>
                </div>
            </div>
        @endif
    </main>

    <footer class="footer py-5" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 mb-3 mb-md-0 text-md-center">
                    <a href="{{ url( '/' ) }}">
                        <img class="logo mb-md-4" src="{{ asset( 'img/logo.png') }}" alt="Linda Carlstad logo">
                    </a>
                    <br class="d-none d-md-block">
                    <a href="https://kau.se">
                        <img class="logo" src="{{ asset( 'img/partner/kau.png') }}" alt="Karlstads Universitets logo">
                    </a>
                </div>
                <div class="col-md-3">
                    <p>
                        <hr class="d-block d-md-none">
                        <span>Linda Carlstad</span>
                        <br class="d-block d-md-none">
                        <hr class="d-none d-md-block">
                        <a href="mailto:info@lindacarlstad.se">info@lindacarlstad.se</a>
                        <br>
                        Universitetsgatan 2
                        <br>
                        651 68 Karlstad
                    </p>
                </div>
                <div class="col-md-3">
                    <p>
                        <hr class="d-block d-md-none">
                        <span>Föreningen</span>
                        <br class="d-block d-md-none">
                        <hr class="d-none d-md-block">
                        <a href="{{ route( 'contact' ) }}">Kontakta oss</a>
                        <br>
                        <a href="{{ route( 'about' ) }}">Om oss</a>
                        <br>
                        <a href="{{ route( 'programs' ) }}">Program</a>
                        <br>
                        <a href="{{ route( 'new-member' ) }}">Bli medlem</a>
                    </p>
                </div>
                <div class="col-md-3">
                    <p>
                        <hr class="d-block d-md-none">
                        <span>Länkar</span>
                        <br class="d-block d-md-none">
                        <hr class="d-none d-md-block">
                        <a href="{{ route( 'partner' ) }}">Partners</a>
                        <br>
                        <a href="{{ route( 'song' ) }}">Sånger</a>
                        <br>
                        <a href="{{ route( 'document' ) }}">Dokument</a>
                        <br>
                        <a href="{{ route( 'news' ) }}">Nyheter</a>
                        <br>
                        <a href="http://tentahub.se/linda">Tentor</a>
                    </p>
                </div>
            </div>
            <div class="row social-footer-icons justify-content-center">
                <a target="_blank" href="https://www.facebook.com/linda.carlstad/"><i class="fab fa-facebook"></i></a>
                <br>
                <a target="_blank" href="https://www.linkedin.com/company/linda-carlstad/about/"><i class="fab fa-linkedin"></i></a>
                <br>
                <a target="_blank" href="https://www.instagram.com/lindacarlstad/"><i class="fab fa-instagram"></i></a>
                <br>
                <a href="#" data-toggle="tooltip" data-placement="top" title="@lindacarlstad"><i class="fab fa-snapchat"></i></a>
                <br>
                <a target="_blank" href="https://github.com/Linda-Carlstad"><i class="fab fa-github"></i></a>
                <br>
                <a target="_blank" href="https://discordapp.com/invite/u8eNCPk?fbclid=IwAR27Zd8nVHtKmW9_qmoT2WHotDFNkNtgcxJ-M1b1xvb1dZa6avDG9QfTYho"><i class="fab fa-discord"></i></a>
                <br>
                <a target="_blank" href="https://www.reddit.com/r/lindacarlstad/"><i class="fab fa-reddit"></i></a>
                <br>
            </div>
        </div>
        <div class="footer-copyright">
            <br>
            <small>Copyright © 2019 - All Rights Reserved - Studentföreningen Linda Carlstad</small>
        </div>
        </div>
    </footer>
</body>

</html>
