$( function () {
    $( '[data-toggle="tooltip"]' ).tooltip()
})

$( '#documentTab a' ).on( 'click', function( e )
{
    e.preventDefault()
    $( this ).tab( 'show' )
} );