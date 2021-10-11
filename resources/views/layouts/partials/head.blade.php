<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="keywords" content="Utbildning, Utbildningar, Förening, Föreningar, Studentförening, Studentföreningar,
            Webbutvecklare, Webbutveckling, Data, Dataingenjör, IT-design, Datateknink, Teknik, Utbildningsförening,
            Karlstad, Universitet, Karlstads universitet, KAU, Linda, Linda Carlstad, Carlstad, HHK, Handels,
            Högskolan, Handelshögskolan">
<meta name="description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
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
<meta itemprop="description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta itemprop="image" content="{{ config( 'app.url' ) }}/img/logo.png">
<!-- Twitter -->
<meta property="twitter:card" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta property="twitter:title" content="{{ config( 'app.name' ) }}">
<meta property="twitter:description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
<meta property="twitter:image" content="{{ config( 'app.url' ) }}/img/logo.png">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta property="og:title" content="{{ config( 'app.name' ) }}">
<meta property="og:description" content="LINDA är en studentförening under Karlstads Universitet. LINDA bevakar ditt intresse som student - @yield( 'title')">
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


<script src="{{ asset( '/js/app.js' ) }}" type="text/javascript"></script>
<script src="https://www.google.com/recaptcha/api.js?render={{ env( 'GOOGLE_RECAPTCHA_KEY' ) }}"></script>

<script defer type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "LINDA Carlstad",
    "url": "https://www.lindacarlstad.se/",
    "address": "Universitetsgatan 2, 651 88 Karlstad",
    "sameAs": [
      "https://www.facebook.com/linda.carlstad/",
      "https://twitter.com/lindacarlstad/",
      "https://www.linkedin.com/company/linda-carlstad/",
      "https://www.instagram.com/lindacarlstad/"
    ]
  }
</script>
