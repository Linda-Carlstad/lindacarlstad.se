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
      'app_id' => '105287106191432',
      'app_secret' => '25b0be5edaede0f1b58df56019462dbc',
      'default_graph_version' => 'v3.3',
      ]);

      try {
      // Returns a `Facebook\FacebookResponse` object
      $response = $fb->get('/1513583672218443?fields=posts{caption,full_picture,message,permalink_url,created_time}', 'EAAK8tWz2yjIBABfdDZCYh6wQ3aB8sxJZCEZBf9nnFdKsCrrUn3JBLDa2ZBZBINb7yNwqwsK1uQkHX5w9CEXTIlvLIMptNS5ruLQ7UAO3rvT64TPZCOF0U7q7j2GMzqL9gQiJduUbnezR3msQZAuoMbKUdALcyhTojvDOxCxdl0wUkcqZCnhgXSIh4k7FvofcBflrk1asrmsZAHAZDZD');
      } catch(Facebook\Exceptions\FacebookResponseException $e) {
      echo 'Graph returned an error: ' . $e->getMessage();
      exit;
      } catch(Facebook\Exceptions\FacebookSDKException $e) {
      echo 'Facebook SDK returned an error: ' . $e->getMessage();
      exit;
      }

      $posts = $response->getGraphNode();

      $posts_data = $posts->getProperty('posts');

      return view('news')->with('facebookData', $posts_data);

    }
}
