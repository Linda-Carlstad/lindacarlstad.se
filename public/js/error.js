if( $( "#error-message" ) )
{
    let error = $( '#error-id' ).text();
    let message = '> Något har gått fel. <br> > Vi kanske drack för mycket guck? ^1000 <br>> <br> > Vänligen testa igen.'

    var typed = new Typed( "#error-message",
    {
        strings:
        [
            message
        ],
        typeSpeed: 70,
    } );
}
