const catalogo = [
    {
        id: 1,
        nome: "Camisa Bege com Bolsos",
        marca: "Zara",
        preço: 100.50,
        nomeImagem: "product-1.jpg",
        feminino: false,
      },
      {
        id: 2,
        nome: "Casaco Preto com Lã",
        marca: "Zara",
        preço: 300,
        nomeImagem: "product-2.jpg",
        feminino: true,
      },
      {
        id: 3,
        nome: "Jaqueta com Efeito Camurça",
        marca: "Zara",  
        preço: 60,
        nomeImagem: "product-3.jpg",
        feminino: false,
      },
      {
        id: 4,
        nome: "Sobretudo em Mescla de Lã",
        marca: "Zara",     
        preço: 160,
        nomeImagem: "product-4.jpg",
        feminino: false,
      },
      {
        id: 5,
        nome: "Camisa Larga Acolchoada de Veludo Cotelê",
        marca: "Zara",       
        preço: 110,
        nomeImagem: "product-5.jpg",
        feminino: false,
      },
      {
        id: 6,
        nome: "Casaco de Lã com Botões",
        marca: "Zara",       
        preço: 170,
        nomeImagem: "product-6.jpg",
        feminino: true,
      },
      {
        id: 7,
        nome: "Casaco com Botões",
        marca: "Zara",     
        preço: 75,
        nomeImagem: "product-7.jpg",
        feminino: true,
      },
      {
        id: 8,
        nome: "Colete Comprido com Cinto",
        marca: "Zara",      
        preço: 88,
        nomeImagem: "product-8.jpg",
        feminino: true,
      }
];

for(const produtoCatalogo of catalogo){
    const cartaoProduto = `<div id="card-produto1">
<img src="./assets/img/${produtoCatalogo.nomeImagem}" alt="homem com camisa bege" style="height: 300px;">
<p>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>R$${produtoCatalogo.preço}</p>
<button>Adicionar</button>
</div>`;
document.getElementById("produtos").innerHTML += cartaoProduto;
}

