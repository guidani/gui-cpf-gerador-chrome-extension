function gerarCPF() {
  const random = (n) => Math.floor(Math.random() * n);

  const calcularDigito = (base) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += base[i] * (base.length + 1 - i);
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  let cpf = [];
  for (let i = 0; i < 9; i++) {
    cpf.push(random(10));
  }

  cpf.push(calcularDigito(cpf));
  cpf.push(calcularDigito(cpf));

  return cpf.join("");
}

// Função para formatar CPF com máscara
function formatarCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

// Função para copiar CPF e exibir mensagem
function copiarCPF(cpf, mascarado) {
  navigator.clipboard
    .writeText(cpf)
    .then(() => {
      document.getElementById("cpf").innerText = mascarado
        ? `${cpf}`
        : `${cpf}`;
      document.getElementById("message").innerText =
        "CPF copiado para a área de transferência!";
      document.getElementById("message").style.color = "green";
    })
    .catch((err) => {
      document.getElementById("message").innerText =
        "Erro ao copiar o CPF para a área de transferência.";
      document.getElementById("message").style.color = "red";
    });
}

// Gerar CPF com máscara
document.getElementById("generateMasked").addEventListener("click", () => {
  const cpf = gerarCPF();
  const cpfMascarado = formatarCPF(cpf);
  copiarCPF(cpfMascarado, true);
});

// Gerar CPF sem máscara
document.getElementById("generateUnmasked").addEventListener("click", () => {
  const cpf = gerarCPF();
  copiarCPF(cpf, false);
});
