<?php 
$alertaCad = "";
require 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $sobrenome = $_POST['sobrenome'] ?? '';
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    $nomeCompleto = $nome . ' ' . $sobrenome;
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");

    if ($stmt->execute([$nomeCompleto, $email, $senhaHash])) {
        $alertaCad = "Cadastro realizado com sucesso!";
    } else {
        $alertaCad = "Erro ao realizar o cadastro.";
    }
  }
?>

<div class="card-body p-3 p-md-4 p-xl-5">
  <?php if (!empty($alertaCad)) : ?>
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      <?= $alertaCad ?>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    </div>
    <?php $alertaCad = ""; ?>
  <?php endif; ?>

  <div class="text-center mb-3">
    <a href="#!">
      <img src="../img/icons/logo.png" alt="Logo" width="80">
    </a>
  </div>

  <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
    Entre suas credenciais para regirstrar-se
  </h2>

  <form method="POST" action="#cadastro">
    <div class="row gy-2 overflow-hidden">

      <div class="col-12">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="nome" placeholder="Nome" required>
          <label for="nome" class="form-label">Nome</label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="sobrenome" placeholder="Sobrenome" required>
          <label for="sobrenome" class="form-label">Sobrenome</label>
        </div>
      </div>

      <div class="col-12"> <div class="form-floating mb-3">
          <input type="email" class="form-control" name="email" placeholder="name@example.com" required>
          <label for="email" class="form-label">Email</label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-floating mb-3">
          <input type="password" class="form-control" name="senha" value="" placeholder="Password" required>
          <label for="senha" class="form-label">Password</label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="termos" required>
          <label class="form-check-label text-secondary" for="termos">
            Eu concordo com os <a href="#" class="link-dark text-decoration-none">termos e condições</a>
          </label>
        </div>
      </div>

      <div class="col-12">
        <div class="d-grid my-3">
          <button class="btn btn-dark btn-lg" type="submit">Registrar-se</button>
        </div>
      </div>

      <div class="col-12">
        <p class="m-0 text-secondary text-center">
          Já possui uma conta? <a href="#login"
            class="link-dark text-decoration-none">Entrar</a>
        </p>
      </div>

    </div>
  </form>

</div>
