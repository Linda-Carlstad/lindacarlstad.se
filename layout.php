<!doctype html>
<html lang="sv">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="css/main.css">
        <link rel="icon" href="img/icon.ico">
        <title>Linda Carlstad - <?php echo $title ?></title>
    </head>
    <body>
        <nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
            <a class="navbar-brand" href="index.php">
              <img src="img/small-logo.png" alt="Golden apple with crown">
              Linda Carlstad
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Hem <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.php">Föreningen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="new-member.php">Bli medlem</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="exams.php">Tentor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="store.php">Webshop</a>
                    </li>
                    <!--
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logga in</a>
                        </li>
                      -->
                </ul>
            </div>
        </nav>

        <main>
          <div class="container">
            <?php include($childView); ?>
          </div>
        </main>

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3 d-none d-md-block text-center">
                        <a href="">
                        <img src="img/logo.png" alt="Linda Carlstad logo">
                        </a>
                    </div>
                    <div class="col-12 col-md-3">
                        <p>
                            <span>Linda Carlstad</span>
                            <br>
                            Universitetsgatan 2
                            <br>
                            651 68 Karlstad
                        </p>
                    </div>
                    <div class="col-12 col-md-3">
                        <p>
                            <span>Länkar</span>
                            <br>
                            <a href="exams.php">Tentor</a>
                            <br>
                            <a href="http://lindacarlstad.se/robot/terminal.html">Terminal</a>
                            <br>
                            <a href="events.php">Event</a>
                            <br>
                            <a href="documents.php">Dokument</a>
                        </p>
                    </div>
                    <div class="col-12 col-md-3">
                        <p>
                            <span>Föreningen</span>
                            <br>
                            <a href="about.hmtl">Om oss</a>
                            <br>
                            <a href="new-member.php">Bli medlem</a>
                            <br>
                            <a href="mailto:info@lindacarlstad.se">info@lindacarlstad.se</a>
                            <br>
                            <a href="secret.php" class="special">Secret</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
</html>
