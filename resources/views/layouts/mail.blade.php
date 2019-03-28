<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <style>
            @font-face
            {
                font-family: Arial, Helvetica, sans-serif
                src: url('https://fonts.googleapis.com/css?family=Pontano+Sans');
            }

            a
            {
                color: #C9BC73;
                text-decoration: none;
            }

            h3
            {
                margin-bottom: 5px;
            }

            hr
            {
                width: 70%;
                margin: 0 auto;
                color: #C9BC73;
            }

            body
            {
                width: 70%;
                margin: 20px auto;
            }

            @media only screen and (max-width: 768px )
            {
                body
                {
                    width: 100%;
                    margin: 20px auto;
                }
            }

            .wrapper
            {
                background-color: #efefef;
                border-radius: 4px;
            }

            header
            {
                background-color: #722F37;
                color: #fff !important;
                padding: 20px 0;
                width: 100%;
                text-align: center;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }

            .main
            {
                width: 100%;
                padding: 40px 20px;
            }

            footer
            {
                padding: 20px 0;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                width: 100%;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <header>
                <h1>Linda Carlstad</h1>
            </header>

            <div class="main">
                @yield( 'content' )
            </div>

            <footer>
                <hr>
                <h3>Linda Carlstad</h3>
                <a href="https://lindacarlstad.se">https://lindacarlstad.se</a>
                <br>
                Universitetsgatan 2
                <br>
                651 68 Karlstad
                <br>
                <a href="mailto:info@lindacarlstad.se">info@lindacarlstad.se</a>
            </footer>
        </div>
    </body>
</html>
