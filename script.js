const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  reveals.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }

  });

});


// HERO IMAGENS

const imagens = document.querySelectorAll('.hero-bg .bg');

let atual = 0;

setInterval(() => {

  imagens[atual].classList.remove('active');

  atual = (atual + 1) % imagens.length;

  imagens[atual].classList.add('active');

}, 5000);


// FORMULÁRIO

document
.getElementById("formAgendamento")
.addEventListener("submit", function(e){

  e.preventDefault();

  const nome = document.getElementById("nome").value;

  const telefone = document.getElementById("telefone").value;

  const veiculo = document.getElementById("veiculo").value;

  const servico = document.getElementById("servico").value;

  const mensagem = `Olá, gostaria de fazer um agendamento!

👤 Nome: ${nome}
📞 Telefone: ${telefone}
🚗 Veículo: ${veiculo}
🛠️ Serviço: ${servico}`;

  const numero = "5586998020011";

  const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  const confirmacao =
document.getElementById("mensagemConfirmacao");

  confirmacao.classList.add("active");

  window.open(url, "_blank");

  document.getElementById("formAgendamento").reset();

  setTimeout(() => {

    confirmacao.classList.remove("active");

  }, 4000);

});