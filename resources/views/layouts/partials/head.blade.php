<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="keywords" content="Utbildning, Utbildningar, Förening, Föreningar, Studentförening, Studentföreningar,
            Webbutvecklare, Webbutveckling, Data, Dataingenjör, IT-design, Datateknink, Teknik, Utbildningsförening,
            Karlstad, Universitet, Karlstads universitet, KAU, LINDA, Linda Carlstad, Carlstad, HHK, Handels,
            Högskolan, Handelshögskolan">
<meta name="description" content="LINDA är en studentförening under Karlstads universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta name="subject" content="Social">
<meta name="image" content="{{ config( 'app.url' ) }}/img/logo.png">
<meta name="copyright" content="{{ config( 'app.name' ) }}">
<meta name="language" content="{{ str_replace( '_', '-', app()->getLocale()) }}">
<meta name="robots" content="index, follow">
<meta name="Classification" content="Business">
<meta name="author" content="{{ config( 'app.name' ) }}">
<meta name="designer" content="{{ config( 'app.name' ) }}">
<meta name="copyright" content="{{ config( 'app.name' ) }}">
<meta name="reply-to" content="info@lindacarlstad.se">
<meta name="owner" content="{{ config( 'app.name' ) }}">
<meta name="url" content="{{ config( 'app.url' ) }}">
<meta name="identifier-URL" content="{{ config( 'app.url' ) }}">
<meta name="coverage" content="Worldwide">
<meta name="distribution" content="Global">
<meta name="rating" content="General">
<meta name="revisit-after" content="7 days">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="canonical" href="{{ Request::url() }}">
<link rel="home" href="{{ Request::url() }}">
<link rel="alternate" hreflang="x-default" href="{{ Request::url() }}">

<!-- Schema.org for Google -->
<meta itemprop="name" content="{{ config( 'app.name' ) }}">
<meta itemprop="description" content="LINDA är en studentförening under Karlstads universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta itemprop="image" content="{{ config( 'app.url' ) }}/img/logo.png">
<!-- Twitter -->
<meta property="twitter:card" content="LINDA är en studentförening under Karlstads universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta property="twitter:title" content="{{ config( 'app.name' ) }}">
<meta property="twitter:description" content="LINDA är en studentförening under Karlstads universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta property="twitter:image" content="{{ config( 'app.url' ) }}/img/logo.png">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta property="og:title" content="{{ config( 'app.name' ) }}">
<meta property="og:description" content="LINDA är en studentförening under Karlstads universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta property="og:image" content="{{ config( 'app.url' ) }}/img/logo.png">
<meta property="og:url" content="{{ config( 'app.url' ) }}">
<meta property="og:site_name" content="{{ config( 'app.name' ) }}">
<meta property="og:locale" content="{{ str_replace( '_', '-', app()->getLocale()) }}">
<meta property="og:type" content="website">

<title>{{ config( 'app.name', 'Linda Carlstad' ) }} - {{ config( 'app.slogan' ) }} | @yield( 'title')</title>

<link rel="dns-prefetch" href="https://fonts.gstatic.com">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" integrity="sha256-UK1EiopXIL+KVhfbFa8xrmAWPeBjMVdvYMYkTAEv/HI=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" integrity="sha256-4hqlsNP9KM6+2eA8VUT0kk4RsMRTeS7QGHIM+MZ5sLY=" crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
<link href="{{ mix( '/css/main.css' ) }}" rel="stylesheet">
<link href="{{ asset( '/img/icon.ico' ) }}" rel="icon">


<script defer src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" integrity="sha256-NXRS8qVcmZ3dOv3LziwznUHPegFhPZ1F/4inU7uC8h0=" crossorigin="anonymous"></script>
<script defer src="{{ asset( '/js/main.js' ) }}" type="text/javascript"></script>
<script defer src="{{ asset( '/js/error.js' ) }}" type="module"></script>
<script defer src="https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
<script src="https://www.google.com/recaptcha/api.js?render={{ env( 'GOOGLE_RECAPTCHA_KEY' ) }}"></script>
<script defer>
    var galite = galite || {};
    galite.UA = 'UA-136489552-1';
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

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1618121,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<script defer type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Linda Carlstad",
    "url": "https://www.lindacarlstad.se/",
    "address": "Universitetsgatan 2, 651 88 Karlstad",
    "sameAs": [
      "https://www.instagram.com/lindacarlstad/",
      "https://www.facebook.com/linda.carlstad/",
      "https://hitract.se/hitclub/651/",
      "https://www.linkedin.com/company/linda-carlstad/"
    ]
  }
</script>
