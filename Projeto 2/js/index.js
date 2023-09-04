function valor() {
  let valor = document.getElementById("porte").value;
  if (valor === "p") {
    document.getElementById("valor").innerHTML = "R$60,00";
  }
  if (valor === "m") {
    document.getElementById("valor").innerHTML = "R$80,00";
  }
  if (valor === "g") {
    document.getElementById("valor").innerHTML = "R$100,00";
  }
  if (valor === "gg") {
    document.getElementById("valor").innerHTML = "R$120,00";
  }
}

function agendado() {
  let agendado = document.getElementById("agendar").value;
  let valor = document.getElementById("porte").value;
  let data = new Date(agendado),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear(),
    hora = data.getHours(),
    minuto = data.getMinutes();
  if (valor != "" && agendado != "") {
    alert(
      "Agendado com sucesso para: \n" +
        diaF +
        "/" +
        mesF +
        "/" +
        anoF +
        " às " +
        hora +
        ":" +
        minuto
    );
  } else {
    alert("Você precisa informar todos os campos obrigatórios!");
  }
}

function entrar() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  if (login != "" && senha != "") {
    alert("Logado com sucesso! Seja bem-vindo " + login);
  } else {
    alert("Você precisa informar usuário e senha!");
  }
}

function cadastrar() {
  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let email = document.getElementById("email").value;
  let celular = document.getElementById("celular").value;
  let senha = document.getElementById("senha").value;

  if (
    nome != "" &&
    endereco != "" &&
    email != "" &&
    celular != "" &&
    senha != ""
  ) {
    alert("Usuário cadastrado com sucesso!");
  } else {
    alert("Você precisa preencher todos os campos obrigatórios!");
  }
}

function senhaEmail() {
  let novaSenha = prompt(
    "Informe seu e-mail para receber uma nova senha de acesso:"
  );
  if (novaSenha) {
    alert("Uma nova senha foi enviada para o e-mail informado!");
  } else {
    alert("Falha no envio da nova senha!");
  }
}
