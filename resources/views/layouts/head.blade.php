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
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" integrity="sha256-UK1EiopXIL+KVhfbFa8xrmAWPeBjMVdvYMYkTAEv/HI=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" integrity="sha256-4hqlsNP9KM6+2eA8VUT0kk4RsMRTeS7QGHIM+MZ5sLY=" crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
<link href="{{ asset( '/css/main.css' ) }}" rel="stylesheet">
<link href="{{ asset( '/img/icon.ico' ) }}" rel="icon">

<script src="https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js" async></script>
<script  >
    var galite = galite || {};
    galite.UA = 'UA-136489552-1';
</script>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" integrity="sha256-NXRS8qVcmZ3dOv3LziwznUHPegFhPZ1F/4inU7uC8h0=" crossorigin="anonymous"></script>
<script src="{{ asset( '/js/main.js' ) }}" type="text/javascript"></script>
<script src="{{ asset( '/js/error.js' ) }}" type="module"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
<script  >
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

<script src="https://www.google.com/recaptcha/api.js?render={{ env( 'GOOGLE_RECAPTCHA_KEY' ) }}"></script>
<script  >
    grecaptcha.ready(function() {
        grecaptcha.execute( '{{ env( 'GOOGLE_RECAPTCHA_KEY' ) }}', { action: 'contactForm' } ).then( function( token )
        {
            if( token )
            {
                document.getElementById( 'recaptcha' ).value = token;
            }
        });
    });
</script>

{{--<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M722PDN');</script>--}}
