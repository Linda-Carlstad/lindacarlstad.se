@section('title', 'Webbshop')
@extends('layouts.app')
@section('content')

    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="list-group">
            <h5 class="list-group-item bg-dark">Kategorier</h5>
            <a href="#" class="list-group-item bg-dark">Medlemskap</a>
            <a href="#" class="list-group-item bg-dark">Evengemang</a>
            <a href="#" class="list-group-item bg-dark">Märken & Pins</a>
            <a href="#" class="list-group-item bg-dark">Övrigt</a>
          </div>
          <br class="d-block d-lg-none">
        </div>
        <div class="col-lg-9">
          <!-- Slider main container -->
          <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
            </div>
            <div class="swiper-slide">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
            </div>
            <div class="swiper-slide">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
            </div>
          </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination swiper-pagination-white"></div>
            <!-- If we need navigation buttons -->
              <div class="swiper-button-prev swiper-button-white"></div>
              <div class="swiper-button-next swiper-button-white"></div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100 bg-dark">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item One</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

@endsection
