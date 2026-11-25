var motos = [
  { nome: "CG 160 Fan", marca: "Honda", tipo: "Street", preco: 18980, cilindrada: 162, consumo: 40, cor: "#c62828" },
  { nome: "Fazer 250", marca: "Yamaha", tipo: "Naked", preco: 24990, cilindrada: 249, consumo: 30, cor: "#283593" },
  { nome: "XRE 190", marca: "Honda", tipo: "Trail", preco: 24530, cilindrada: 184, consumo: 38, cor: "#ef6c00" }
];

var mensagens = [];

function formatar(valor) {
  return "R$ " + valor.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

function criarCard(m) {
  var h = "";
  h += '<div class="col-md-4 mb-4">';
  h += '  <div class="card h-100">';
  h += '    <div class="foto" style="background-color:' + m.cor + '">🏍️</div>';
  h += '    <div class="card-body">';
  h += '      <span class="badge bg-secondary">' + m.tipo + '</span>';
  h += '      <h5 class="mt-2">' + m.nome + '</h5>';
  h += '      <p class="text-secondary mb-1">' + m.marca + '</p>';
  h += '      <p class="small">' + m.cilindrada + ' cc - ' + m.consumo + ' km/l</p>';
  h += '      <p class="preco">' + formatar(m.preco) + '</p>';
  h += '      <a href="#/financiamento" class="btn btn-primary btn-sm">Simular</a>';
  h += '    </div>';
  h += '  </div>';
  h += '</div>';
  return h;
}

function paginaInicio() {
  var h = "";
  h += '<div class="banner">';
  h += '  <h1>A sua proxima moto esta aqui</h1>';
  h += '  <p>Veja os modelos, simule o financiamento e fale com a loja.</p>';
  h += '  <a href="#/motos" class="btn btn-light">Ver as motos</a>';
  h += '</div>';
  h += '<div class="container mt-5">';
  h += '  <h2>Nossos destaques</h2>';
  h += '  <p class="text-secondary">Os modelos que mais saem da loja.</p>';
  h += '  <div class="row">';
  h += criarCard(motos[0]);
  h += criarCard(motos[1]);
  h += criarCard(motos[2]);
  h += '  </div>';
  h += '</div>';
  return h;
}

function paginaMotos() {
  var h = '<div class="container mt-5">';
  h += '<h2>Nossas motos</h2>';
  h += '<p class="text-secondary">Escolha o tipo ou digite o nome da moto.</p>';
  h += '<div class="row mb-4">';
  h += '  <div class="col-md-6 mb-2">';
  h += '    <input type="text" class="form-control" id="busca" placeholder="Buscar" onkeyup="mostrarMotos()">';
  h += '  </div>';
  h += '  <div class="col-md-6 mb-2">';
  h += '    <select class="form-select" id="tipo" onchange="mostrarMotos()">';
  h += '      <option value="todos">Todos os tipos</option>';
  h += '      <option value="Street">Street</option>';
  h += '      <option value="Naked">Naked</option>';
  h += '      <option value="Trail">Trail</option>';
  h += '    </select>';
  h += '  </div>';
  h += '</div>';
  h += '<div id="lista"></div>';
  h += '</div>';
  return h;
}

function mostrarMotos() {
  var busca = document.getElementById("busca").value.toLowerCase();
  var tipo = document.getElementById("tipo").value;
  var h = '<div class="row">';
  var achou = 0;

  for (var i = 0; i < motos.length; i++) {
    var m = motos[i];
    if (m.nome.toLowerCase().indexOf(busca) >= 0 && (tipo == "todos" || m.tipo == tipo)) {
      h += criarCard(m);
      achou = achou + 1;
    }
  }

  h += '</div>';

  if (achou == 0) {
    h = '<div class="alert alert-warning">Nenhuma moto encontrada.</div>';
  }

  document.getElementById("lista").innerHTML = h;
}

function paginaFinanciamento() {
  var h = '<div class="container mt-5">';
  h += '<h2>Simulador de financiamento</h2>';
  h += '<p class="text-secondary">Juros de 1,5% ao mes, so para ter uma ideia.</p>';
  h += '<div class="row">';
  h += '  <div class="col-md-6">';
  h += '    <div class="card p-4">';
  h += '      <label class="form-label">Valor da moto</label>';
  h += '      <input type="number" class="form-control mb-3" id="valor" value="18980">';
  h += '      <label class="form-label">Entrada</label>';
  h += '      <input type="number" class="form-control mb-3" id="entrada" value="3000">';
  h += '      <label class="form-label">Parcelas</label>';
  h += '      <select class="form-select mb-3" id="parcelas">';
  h += '        <option>12</option><option>24</option><option selected>36</option><option>48</option>';
  h += '      </select>';
  h += '      <button class="btn btn-primary" onclick="calcular()">Calcular</button>';
  h += '    </div>';
  h += '  </div>';
  h += '  <div class="col-md-6 mt-3 mt-md-0"><div id="resultado"></div></div>';
  h += '</div>';
  h += '</div>';
  return h;
}

function calcular() {
  var valor = Number(document.getElementById("valor").value);
  var entrada = Number(document.getElementById("entrada").value);
  var parcelas = Number(document.getElementById("parcelas").value);

  if (entrada >= valor) {
    document.getElementById("resultado").innerHTML = '<div class="alert alert-danger">A entrada tem que ser menor que o valor da moto.</div>';
    return;
  }

  var financiado = valor - entrada;
  var juros = financiado * 0.015 * parcelas;
  var total = financiado + juros;
  var parcela = total / parcelas;

  var h = '<div class="card p-4">';
  h += '<h5>Resultado</h5>';
  h += '<p>Valor financiado: ' + formatar(financiado) + '</p>';
  h += '<p>Juros: ' + formatar(juros) + '</p>';
  h += '<p>Total a pagar: ' + formatar(total + entrada) + '</p>';
  h += '<h3 class="preco">' + parcelas + 'x de ' + formatar(parcela) + '</h3>';
  h += '</div>';

  document.getElementById("resultado").innerHTML = h;
}

function paginaContato() {
  var h = '<div class="container mt-5">';
  h += '<h2>Fale com a loja</h2>';
  h += '<p class="text-secondary">Preencha os campos que a gente responde.</p>';
  h += '<div class="row">';
  h += '  <div class="col-md-7">';
  h += '    <div class="card p-4">';
  h += '      <label class="form-label">Nome</label>';
  h += '      <input type="text" class="form-control mb-3" id="nome">';
  h += '      <label class="form-label">Email</label>';
  h += '      <input type="email" class="form-control mb-3" id="email">';
  h += '      <label class="form-label">Mensagem</label>';
  h += '      <textarea class="form-control mb-3" id="texto" rows="4"></textarea>';
  h += '      <div id="aviso"></div>';
  h += '      <button class="btn btn-primary" onclick="enviar()">Enviar</button>';
  h += '    </div>';
  h += '  </div>';
  h += '  <div class="col-md-5 mt-3 mt-md-0">';
  h += '    <div class="card p-4">';
  h += '      <h5>Mensagens enviadas</h5>';
  h += '      <div id="lista-mensagens"></div>';
  h += '    </div>';
  h += '  </div>';
  h += '</div>';
  h += '</div>';
  return h;
}

function mostrarMensagens() {
  var h = "";
  if (mensagens.length == 0) {
    h = '<p class="text-secondary small">Nenhuma mensagem ainda.</p>';
  } else {
    for (var i = 0; i < mensagens.length; i++) {
      h += '<p class="border-bottom pb-2"><strong>' + mensagens[i].nome + '</strong><br>' + mensagens[i].texto + '</p>';
    }
  }
  document.getElementById("lista-mensagens").innerHTML = h;
}

function enviar() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var texto = document.getElementById("texto").value;

  if (nome == "" || email == "" || texto == "") {
    document.getElementById("aviso").innerHTML = '<div class="alert alert-danger">Preencha todos os campos.</div>';
    return;
  }

  if (email.indexOf("@") < 0) {
    document.getElementById("aviso").innerHTML = '<div class="alert alert-danger">Email invalido.</div>';
    return;
  }

  mensagens.push({ nome: nome, texto: texto });

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("texto").value = "";
  document.getElementById("aviso").innerHTML = '<div class="alert alert-success">Mensagem enviada, obrigado ' + nome + '!</div>';

  mostrarMensagens();
}

function mostrarPagina() {
  var rota = location.hash.replace("#", "");
  var conteudo = document.getElementById("conteudo");

  if (rota == "/motos") {
    conteudo.innerHTML = paginaMotos();
    mostrarMotos();
  } else if (rota == "/financiamento") {
    conteudo.innerHTML = paginaFinanciamento();
  } else if (rota == "/contato") {
    conteudo.innerHTML = paginaContato();
    mostrarMensagens();
  } else {
    conteudo.innerHTML = paginaInicio();
  }

  window.scrollTo(0, 0);
}

window.onhashchange = mostrarPagina;
window.onload = mostrarPagina;
