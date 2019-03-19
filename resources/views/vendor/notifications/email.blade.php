<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <style>
            @font-face
            {
                font-family: Arial, sans-serif !important;
            }
            a
            {
                color: #C9BC73 !important;
                text-decoration: none !important;
            }
            body
            {
                border: 10px;
                margin: 20px auto !important;
            }
            h1
            {
                color: #722F37 !important;
                text-align: center !important;
            }

        </style>
    </head>
    <body>
        <h1>Linda Carlstad</h1>
        <p>Linjeförening för datavetare
            <br><br>
            {{ $actionText }}
            <br><br>
            <a href="{{ $actionUrl }}">Klicka här</a>
        </p>
    </body>
</html>
