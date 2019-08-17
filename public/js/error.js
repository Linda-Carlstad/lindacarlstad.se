if( $( "#error-message" ) )
{
    let error = $( '#error-id' ).text();
    let message = '> Något har gått fel. <br> > Vi kanske drack för mycket guck? ^1000 <br>> <br> > Vänligen testa igen.'

    switch( parseInt( error ) )
    {
        case 404:
            message = '> Du har angett en felatkig länk. <br> > Är du full eller? ^1000 <br>> <br> > Försök med en annan länk. <br> > :)';
            break;
        default:
            message
            break;

    }
    var typed = new Typed( "#error-message",
    {
        strings:
        [
            message
        ],
        typeSpeed: 70,
    } );
}
