$(document).ready( function ()
{
    // Enabling Bootstrap Tooltips
    $( function () {
      $( '[data-toggle="tooltip"]' ).tooltip()
    })

    $( '#documentTab a' ).on( 'click', function( e )
    {
      e.preventDefault()
      $( this ).tab( 'show' )
    } );

    $( '.slick-slider' ).slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true
    });
});
