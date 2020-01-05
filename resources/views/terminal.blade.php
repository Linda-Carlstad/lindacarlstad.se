<!doctype html>
<html>
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

    <title>{{ config( 'app.name', 'Linda Carlstad' ) }} - Terminal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="{{ asset( 'css/terminal/normalize.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'css/terminal/main.css' ) }}">
    <link href="{{ asset( '/img/icon.ico' ) }}" rel="icon">
</head>

<body>
<div id="output-wrapper"></div>

<div class="input-wrapper">
    <span>$&nbsp;</span><input id="input" type="text" autofocus/>
</div>

<script src="{{ asset( 'js/terminal/main.js' ) }}"></script>
</body>

</html>