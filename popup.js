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

  return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

document.getElementById('generate').addEventListener('click', () => {
  const cpf = gerarCPF();
  document.getElementById('cpf').innerText = cpf;
});
