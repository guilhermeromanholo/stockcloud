<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>StockCloud</title>

  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

  <script src="js/scripts.js"></script>
  <script src="bootstrap/js/bootstrap.min.js"></script>
</head>

<body>
  <?php include('html/navbar.html') ?>

  <div id="content">
    <div id="inicio" class="page">
      <?php include('html/inicio.html') ?>
    </div>

    <div id="sobre" class="page" style="display:none;">
      <?php include('html/sobre.html') ?>
    </div>

    <div id="contato" class="page" style="display:none;">
      <?php include('php/contato.php') ?>
    </div>

    <div id="cadastro" class="page" style="display:none;">
      <?php include('php/cadastro.php') ?>
    </div>
  </div>

  <?php include('html/footer.html') ?>
</body>

</html>
