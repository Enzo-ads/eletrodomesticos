const produtos = [
    {
      nome: "Geladeira",
      categoria: "Cozinha",
      quantidade: 5,
      preco: 2800.00
    },
    {
      nome: "Micro-ondas",
      categoria: "Cozinha",
      quantidade: 9,
      preco: 650.00
    },
    {
        nome: "Liquidificador",
      categoria: "Cozinha",
      quantidade: 15,
      preco: 149.90
    },
    {
        nome: "Ventilador",
      categoria: "Climatização",
      quantidade: 8,
      preco: 220.00
    },
    {
        nome: "Ar-condicionado",
      categoria: "Climatização",
      quantidade: 4,
      preco: 1750.00
    },
    {
        nome: "Fogão",
      categoria: "Cozinha",
      quantidade: 8,
      preco: 950.00
    },
    {
        nome: "secador",
      categoria: "ÁCuidados-Pessoais",
      quantidade: 20,
      preco: 219.90
    },
    {
        nome: "forno-elétrico",
      categoria: "Cozinha",
      quantidade: 10,
      preco: 1200.90
    },
    {
        nome: "secadora",
      categoria: "Lavanderia",
      quantidade: 10,
      preco: 1679.90
    },
    {
        nome: "Aspirador",
      categoria: "Limpeza",
      quantidade: 10,
      preco: 279.90
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }