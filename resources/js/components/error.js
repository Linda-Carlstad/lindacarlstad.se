if( document.getElementById( 'error-message' ) )
{
    let error = $( '#error-id' ).text();
    let message = '';

    switch( parseInt( error ) )
    {
        case 401:
            message = '> Du är för full för att göra det där. <br> > Funderat på att nyktra till? ^1000 <br>> <br> > Eller gå till Bunkern och sup mer.';
            break;
        case 403:
            message = '> Här får du inte vara. <br> > Försöker du ta vår guck? ^1000 <br>> <br> > Försök inte igen, då blir Trulle ledsen.';
            break;
        case 404:
            message = '> Du har angett en felatkig länk. <br> > Är du full eller? ^1000 <br>> <br> > Försök med en annan länk. <br> > :)';
            break;
        case 410:
            message = '> Ölen är slut, och festen fortsätter inte här. <br> > Vad kan du göra nu? ^1000 <br>> <br> > Leta upp en annan fest eller gå hem.';
            break;
        case 419:
            message = '> Festen är slut. <br> > Har Securitas kommit än? ^1000 <br>> <br> > Gå och lägg dig, det är sent. <br> > :)';
            break;
        case 429:
            message = '> Nu får du sakta ner litegrann. <br> > Kom du inte in på Bunkern ikväll? ^1000 <br>> <br> > Nyktra till och försök igen om ett tag. <br> > :)';
            break;
        case 500:
            message = '> Servern är full, blev bjuden på guck. <br> > Vem var det som bjöd? ^1000 <br>> <br> > Låt servern nyktra till och försök igen om ett tag. <br> > :)';
            break;
        case 503:
            message = '> Gucken tog ner servern. <br> > Vem söp ner den? ^1000 <br>> <br> > Våra onyktra tekniker kollar på felet. <br> > :)';
            break;

        default:
            message =  '> Något har gått fel. <br> > Vi kanske drack för mycket guck? ^1000 <br>> <br> > Vänligen testa igen.';
            break;

    }

    let typed = new Typed( "#error-message",
        {
            strings:
                [
                    message
                ],
            typeSpeed: Math.round( Math.random( 50 ) * 100 ),
        } );
}