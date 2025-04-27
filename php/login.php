<?php 
$alertaLog = "";
require 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario && ($senhaHash == $usuario['senha'])) {
      $alertaLog = "Login realizado com sucesso!";
    } else {
      $alertaLog = "Email ou senha inválidos.";
    }
  }
?>

<div class="card-body p-3 p-md-4 p-xl-5">
  <?php if (!empty($alertaLog)) : ?>
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      <?= $alertaLog ?>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    </div>
    <?php $alertaLog = ""; ?>
  <?php endif; ?>

  <div class="text-center mb-3">
    <a href="#!">
      <img src="../img/icons/logo.png" alt="Logo" width="80">
    </a>
  </div>

  <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
    Entre suas credenciais para efetuar o login
  </h2>

  <form method="POST" action="#login">
    <div class="row gy-2 overflow-hidden">

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
        <div class="d-grid my-3">
          <button class="btn btn-dark btn-lg" type="submit">Login</button>
        </div>
      </div>

      <div class="col-12">
        <p class="m-0 text-secondary text-center">
          Ainda não possui uma conta? <a href="#cadastro"
            class="link-dark text-decoration-none">Registrar-se</a>
        </p>
      </div>

    </div>
  </form>

</div>
