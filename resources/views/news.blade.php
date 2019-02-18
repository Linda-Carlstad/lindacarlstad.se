
@extends('layouts.app')

@section('content')

<h1 class="text-center">Nyheter</h1>

<br>

<h4 class="text-center">Facebook-nyheter</h4>

<hr>

@php
  require_once '../vendor/facebookAPI/src/Facebook/autoload.php';

  $fb = new Facebook\Facebook([
  'app_id' => '770437356636722',
  'app_secret' => '62e0185cc65a820d038df51ce1592d8c',
  'default_graph_version' => 'v3.2',
  ]);

  try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get('/1513583672218443?fields=posts{caption,full_picture,message,permalink_url,created_time}', 'EAAK8tWz2yjIBAOXEQy3D96dW3HtZBKmBOzDKu9hbkHNUWgrjXaLNShJ0L9Ekpb0Fanrsw8aWv3w6X4Up2nhTFHZASyVMoJXSt0ZCJOHBF94JOIpdSyGa2SH1TtHlesHCWeJWhOWj74E837rOswgMXWqpyWzuFYZD');
  } catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
  } catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
  }

  $posts = $response->getGraphNode();

  $posts_data = $posts->getProperty('posts');

  echo "<div class='row'>";

  foreach ($posts_data as $post) {

      echo
      "<div class='col-sm-4 mb-5 justify-content-center mx-auto'>
      <div class='card bg-dark h-100'>
      <div class='card-body'>";

      // if (strlen($post->getField('full_picture')) === 0) {
      //   echo "<img class='img-fluid post-image' src='/img/missing.jpg' alt='Bild Saknas'>";
      // }else {
      //   echo "<img class='img-fluid bg-white post-image' src='" . $post->getField('full_picture') . "' alt='Facebook Bild'><br><br>";
      // }

      if (strlen($post->getField('caption')) === 0) {
        echo "<h5 class='card-title'>Linda Carlstad</h5>";
      }else {
        echo "<h5 class='card-title'>" . $post->getField('caption') . "</h5>";
      }
      echo "<small>" . $post->getField('created_time')->format('Y-m-d H:i:s') . "</small><br><br>";

      echo "<small class='card-text'>" . substr($post->getField('message'), 0, 200) . "...</small><br><br>";

      echo "<a class='btn btn-red' href='" . $post->getField('permalink_url') . "'>Läs mer</a>";


      echo "
      </div>
      </div>
      </div>";
  }

  echo "</div>";

@endphp
<hr>
@endsection
