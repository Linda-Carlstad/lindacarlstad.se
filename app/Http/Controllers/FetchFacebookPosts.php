<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Facebook\Facebook as Facebook;
use Facebook\Exceptions\FacebookResponseException as FacebookResponseException;
use Facebook\Exceptions\FacebookSDKException as FacebookSDKException;

class FetchFacebookPosts extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

      require_once '../vendor/facebookAPI/src/Facebook/autoload.php';

      $fb = new Facebook([
          'app_id' => '770437356636722',
          'app_secret' => '62e0185cc65a820d038df51ce1592d8c',
          'default_graph_version' => 'v3.2',
      ]);

      try {
      // Returns a `Facebook\FacebookResponse` object
      $response = $fb->get('/1513583672218443?fields=posts{caption,full_picture,message,permalink_url,created_time}',
        'EAAK8tWz2yjIBAOXEQy3D96dW3HtZBKmBOzDKu9hbkHNUWgrjXaLNShJ0L9Ekpb0Fanrsw8aWv3w6X4Up2nhTFHZASyVMoJXSt0ZCJOHBF94JOIpdSyGa2SH1TtHlesHCWeJWhOWj74E837rOswgMXWqpyWzuFYZD');
      } catch(Facebook\Exceptions\FacebookResponseException $e) {
      echo 'Graph returned an error: ' . $e->getMessage();
      exit;
      } catch(Facebook\Exceptions\FacebookSDKException $e) {
      echo 'Facebook SDK returned an error: ' . $e->getMessage();
      exit;
      }

      $posts = $response->getGraphNode();

      $posts_data = $posts->getProperty('posts');

      return view( 'news' )->with('facebookData', $posts_data);

    }
}
