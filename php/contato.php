<?php
$alerta = "";
require 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $assunto = $_POST['assunto'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    $stmt = $pdo->prepare("INSERT INTO contatos (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)");

    if($stmt->execute([$nome, $email, $assunto, $mensagem])) {
      $alerta = "Mensagem enviada com sucesso!";
    } else {
      $alerta = "Erro ao enviar a mensagem.";
    }
}
?>


<div class="container-fluid bg-net d-flex flex-column align-items-center justify-content-center">
  <h1 class="fw-bold text-white">Contato</h1><br>
  <h5 class="text-white">Entre em contato conosco!</h5>
</div>

<div class="container pt-5">
  <?php if (!empty($alerta)) : ?>
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      <?= $alerta ?>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    </div>
    <?php $alerta = ""; ?>
  <?php endif; ?>

  <div class="row">

    <div class="col-7">
      <form method="POST" action="#contato">
        <input class="form-control m-3" placeholder="Nome*" name="nome" required>
        <input class="form-control m-3" type="email" placeholder="Email*" name="email" required>
        <input class="form-control m-3" placeholder="Assunto*" name="assunto" required>
	      <textarea class="form-control m-3" placeholder="Mensagem" name="mensagem" rows="6"></textarea>
	      <button class="btn btn-dark m-3">Enviar</button>
      </form>
    </div>

    <div class="col-4 m-3">
      <p class="fw-bold">Informações</p>
      <p>Avenida Paulista, 777 <br> São Paulo, SP <br><br> contato@stockcloud.com </p>
    </div>

  </div>
</div>

