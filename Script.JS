document.addEventListener('DOMContentLoaded', function() {
    // Menu lateral
    var menuOpen = document.querySelector('.menu-open');
    var menuClose = document.querySelector('.menu-close');
    var menuOverlay = document.querySelector('.menu-overlay');
    var sideMenu = document.querySelector('.side-menu-wrapper');

    if (menuOpen && menuClose && menuOverlay && sideMenu) {
        console.log("Menu elements found");

        menuOpen.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Menu open clicked");
            sideMenu.classList.add('open');
            menuOverlay.style.display = 'block';
        });

        menuClose.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Menu close clicked");
            sideMenu.classList.remove('open');
            menuOverlay.style.display = 'none';
        });

        menuOverlay.addEventListener('click', function() {
            console.log("Menu overlay clicked");
            sideMenu.classList.remove('open');
            menuOverlay.style.display = 'none';
        });
    } 
});     
function pesquisar() {
    const query = document.getElementById("campo-pesquisa").value.toLowerCase();
    const produtos = document.querySelectorAll(".card");
    produtos.forEach((produto) => {
      const nomeProduto = produto.querySelector(".card-title").innerText.toLowerCase();
      if (nomeProduto.includes(query)) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  }
  
    
function pesquisar() {      
    const products = [
        {   
            id:"1",
            name:"Combo Cauterização dos Lisos: Shampoo Cachos e Crespos 250ml + Condicionador Cachos e Crespos 200ml + Ativador de Cachos 100ml + Creme para Pentear Cachos e Crespos 450g",
            description: "A melhor qualidade para seus cabelos lisos! Experimente a linha Siage Cauterização dos Lisos e renove seus cabelos com a qualidade e tecnologia que você merece! Aproveite esta oportunidade e adquira já o seu Kit Siage Cauterização dos Lisos! Sua beleza merece o melhor!",
            image: "asts/1 Imagems de Produtos para compra.webp",
            priceOld: '', 
            priceCurrent: "R$53.99",    
            installments:"", 
            stockStatus:'Em estoque'
        },
        { 
          id:"2",
            name: "Combo Retrô: Desodorante Colônia 95ml + Loção Hidratante Desodorante Corporal 200ml",
             description: "A fragrância que realça sua beleza! Experimente o kit Chic Retrô da Eudora e sinta a elegância e o charme que você merece! Aproveite esta oportunidade e adquira já o seu Kit Chic Retrô! Sua beleza merece o melhor!",
            image: "asts/2 Imagem de Produtos para compra.webp",    
            priceOld: "",
            priceCurrent: "R$149.89",   
            installments:"",    
             stockStatus: 'Em estoque'
        },
        {   
          id:"3",
            name: "Combo Maquiagem para os Olhos: Máscara Soul 7.0 + Lapiseira Retrátil para Olhos",
             description: "Olhos de diva, com um toque de sofisticação! Experimente o kit Soul Kiss da Eudora e realce sua beleza com um olhar marcante e irresistível! Aproveite esta oportunidade e adquira já o seu Kit Soul Kiss! Sua beleza merece o melhor!",
            image: "asts/3 Imagem de Produto para compra.webp",
            priceOld: "R$75.98",
            priceCurrent: "R$49.99",
            installments: "3x de R$16.66",   
             stockStatus: 'Em estoque'
        },
        { 
          id:"4",
            name: "Combo Instância Ameixa e Praliné: Creme Perfumado para as Mãos 30g + Spray Perfumado Desodorante Colônia 200ml + Creme Hidratante Desodorante Corporal + Fondue Hidratante Desodorante Corporal 180ml + Sabonete Vegetal Corporal em Barra",
            description: "Hidratação e perfumação que você merece! Experimente o kit Intense da Eudora e sinta-se renovada com a fragrância que te envolve e a maciez que sua pele precisa. Aproveite esta oportunidade e adquira já o seu Kit Intense! Sua beleza merece o melhor!",
            image: "asts/4 Imagem de Produtos para Compra.webp",
            priceOld: "R$199.95",
            priceCurrent: "R$161.95",
            installments: "10x de R$16.20", 
            stockStatus: 'Em estoque'
        },
        { 
          id:"5",
            name: "Combo Eudora Shampoo Nutri óleos Poderosos 250ml + Condicionador Nutri óleos Poderosos 200ml + Sabonete antiacnes Neo dermo 80g",
            description: "Hidratação e nutrição para seus cabelos! Experimente o kit Siage 'Nutri Óleos Poderosos' da Eudora e renove seus cabelos com a força dos óleos preciosos e a maciez que eles merecem! Aproveite esta oportunidade e adquira já o seu Kit Siage 'Nutri Óleos Poderosos'! Sua beleza merece o melhor!",
            image: "asts/5 Imagem DE Produto Para Compra.webp",    
            priceOld: "",
            priceCurrent:"R$122.97",
            installments: " 8x de R$15.37", 
             stockStatus: 'Em estoque'
        },
        { 
          id:"6",
            name: "Combo Corpo e Banhos Instance Karité (4 itens) Sabonete Vegetal em Barra Perfumado 4x80g",
            description: "Hidratação e cuidado para o seu corpo! Experimente o kit Instance Karité da Eudora e sinta-se envolvida por uma fragrância deliciosa e a maciez que sua pele precisa, com a força do karité! Aproveite esta oportunidade e adquira já o seu Kit Instance Karité! Sua beleza merece o melhor!",
            image: "asts/6 Imagem de Produto Para compra.webp",    
            priceOld:"",
            priceCurrent: "R$133.96 ",
            installments: " 8x de 16.75",   
             stockStatus: 'Em estoque'
        },
        { 
          id:"7",
            name: "Impression Eau De Parfum 100ml",
            description: "Eleve seu estilo com uma fragrância marcante! Experimente Impression Eau de Parfum da Eudora, uma fragrância amadeirada que transmite sofisticação e te envolve com um aroma inesquecível. Aproveite esta oportunidade e adquira já o seu Impression Eau de Parfum! Sua beleza merece o melhor!",
            image: "asts/7 Imagem de Produto Para Compra.webp",
            priceOld:  "R$209.90",
            priceCurrent: "R$174.90",
            installments: "10x de 17.49",   
             stockStatus: 'Em estoque'
        },
        { 
          id:"8",
            name: "Eudora Unique Eau de Parfum 75ml",
            description: "Liberte a mulher poderosa que existe em você! Experimente Eudora Unique Eau de Parfum, uma fragrância floral amadeirada que te envolve em um aroma sofisticado e radiante, ideal para mulheres que marcam presença por onde passam. Aproveite esta oportunidade e adquira já o seu Eudora Unique Eau de Parfum! Sua beleza merece o melhor!",
            image: "asts/8 Imagem De Produto Para Compra.webp",    
            priceOld:"",
            priceCurrent: "R$209.90",
            installments: "10x de R$20,99", 
             stockStatus: 'Em estoque'
        },
        {   
            id:"9",
            name: "Combo Combate o Frizz: Shampoo 250ml + Condicionador 200ml + Leave In 100ml",
            description: "Combata o frizz com a linha Siage e diga adeus aos cabelos arrepiados! Experimente o Shampoo, Condicionador e Leave In Defrizante Siage e deixe seus cabelos lisos e disciplinados por até 72 horas. Aproveite esta oportunidade e adquira já o seu Kit Siage Combate o Frizz! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção 1 (2).webp",
            priceOld: "R$137.97",
            priceCurrent: "R$125.65",
            installments: "8x de R$15.75",  
             stockStatus: 'Em estoque'
        },
        {   
            id:"10",
            name: "Combo Regeneração Pós-Química: Shampoo 250ml + Condicionador 200ml",
            description: "Repare os danos causados por químicas com a linha Siage Regeneração Pós Química! Experimente o Shampoo e Condicionador Siage e repare profundamente seus cabelos com a qualidade e tecnologia que você merece! Aproveite esta oportunidade e adquira já o seu Kit Siage Regeneração Pós Química! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção2.webp",
            priceOld: "R$92.98",
            priceCurrent: "R$79.96",
            installments: " 5x de 15.99",   
             stockStatus: 'Em estoque'
        },
        {   
            id:"11",
            name: "Chic: Colônia Desodorante Chérie 95ml",
            description: "Desperte sua elegância com um toque de sofisticação! Experimente o perfume Chic Chérie da Eudora e realce sua beleza com uma fragrância marcante e irresistível! Aproveite esta oportunidade e adquira já o seu perfume Chic Chérie! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promação 3.webp",
            priceOld: "R$75.98",
            priceCurrent: "R$49.99",
            installments: "3x de R$16.66",  
             stockStatus: 'Em estoque'
        },
        {   
            id:"12",
            name: "Club 6: Desodorante Colônia 96ml",
            description: "Experimente o perfume Club 6 da Eudora e realce sua beleza com uma fragrância marcante e irresistível! Aproveite esta oportunidade e adquira já o seu perfume Club 6! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção 4.webp",
            priceOld: "R$199.95",
            priceCurrent: "R$161.95",
            installments: "10x de R$16.20", 
             stockStatus: 'Em estoque'
        },
        {   
            id:"13",
            name: "Combo Soul: Lapiseira Retrátil 350mg + Delineador Líquido Preto 2,5ml + Lápis para Sobrancelha Médio Escuro 1,1g",
            description: "Olhos de diva, com um toque de sofisticação! Experimente o kit Soul Kiss da Eudora e realce sua beleza com um olhar marcante e irresistível! Aproveite esta oportunidade e adquira já o seu Kit Soul Kiss! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção 5.webp",
            priceOld: "R$100.97",
            priceCurrent: "R$94.97",
            installments: "6x de R$15.83",  
             stockStatus: 'Em estoque'
        },
        {   
            id:"14",
            name: "Kit Skin Perfection: Pó Solto + Primer Matte + Bruma Fixadora",
            description: "Pele perfeita, radiante e impecável! Experimente a linha Siage Skin Perfection e renove sua rotina de cuidados com produtos de alta qualidade e tecnologia que sua pele merece! Aproveite esta oportunidade e adquira já o seu Kit Skin Perfection! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção 6.webp",
            priceOld: " R$101.98",
            priceCurrent: "R$74.99",
            installments: " 5x de R$15.00", 
             stockStatus: 'Em estoque'
        },
        {   
            id:"15",
            name: "Combo Instance Lima Rosa: Loção Corporal 400ml + Gelato Hidratante Desodorante Corporal 200g",
            description: "Hidratação e fragrância que te levam para um paraíso tropical! Experimente a linha Instance Lima Rosa da Eudora e sinta a fragrância fresca e deliciosa da fruta, com a hidratação que sua pele precisa! Aproveite esta oportunidade e adquira já o seu Kit Instance Lima Rosa! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção 7.webp",
            priceOld: "R$209.90",
            priceCurrent: "R$174.90",
            installments: "10x de R$17.49", 
             stockStatus: 'Em estoque'
        },
        {   
            id:"16",
            name: "Combo Gel de Limpeza Neo Dermo 150g + Loção Corporal 150ml + Blush Líquido 15ml",
            description: "Pele radiante, macia e protegida! Experimente o Kit Neo Dermo Purific da Eudora e cuide da sua pele com produtos dermatologicamente testados! Aproveite esta oportunidade e adquira já o seu Kit Neo Dermo Purific! Sua beleza merece o melhor!",
            image: "asts/Produto Em Promoção 8.webp",
            priceOld: " R$125.97",
            priceCurrent: "R$120.97",
            installments: "8x de R$15.12",  
             stockStatus: 'Em estoque'
        } ,
        {   
          id:"17",
          name: "Kit Presente Natal Velvet Sensual",
          description: "Desperte seus sentidos com Velvet Sensual. Sinta a intensidade da fragrância oriental amadeirada e a suavidade da loção hidratante corporal.Um kit completo para você se sentir ainda mais sensual em todas as ocasiões.Presenteie-se com esse toque de sofisticação!",
          image: "asts/Novidades-para-Carrossel.webp",
          priceOld: " R$152.98",
          priceCurrent: "R$90.93",
          installments: "",  
           stockStatus: 'Em estoque'
      }, 
      {   
        id:"18",
        name: "Kit Eudora H- Perfume + loção hidratante 200ml",
        description: "Pele radiante, macia e protegida! Experimente o Kit Neo Dermo Purific da Eudora e cuide da sua pele com produtos dermatologicamente testados! Aproveite esta oportunidade e adquira já o seu Kit Neo Dermo Purific! Sua beleza merece o melhor!",
        image: "asts/Novidades-Para-carrossel-2.webp",
        priceOld: " R$125.97",
        priceCurrent: "R$120.97",
        installments: "",  
         stockStatus: 'Em estoque'
    }, 
    {   
      id:"19",
      name: "Presente Eudora Niina Secrets Palette Multifuncional Natal",
      description: "Solte a sua criatividade com a paleta Eudora!Desvende um mundo de possibilidades com essa paleta completa de sombras.Cores intensas e pigmentadas para você criar maquiagens incríveis e arrasar por onde passar.Um kit indispensável para todas as amantes de maquiagem!",
      image: "asts/Novidades-Para-carrossel-3.webp",
      priceOld: " R$206.49",
      priceCurrent: " R$122.43",
      installments: "",  
       stockStatus: 'Em estoque'
    }, 
    {   
      id:"20",
      name: "Presente Eud Edp Rouge Deo Col + Loção",
      description: "Desperte a sua sensualidade com Eudora Rouge!Uma fragrância oriental amadeirada que te envolve em um manto de mistério e sedução.A loção corporal completa a experiência, deixando sua pele macia e perfumada por muito mais tempo.",
      image: "asts/NovidadesParacarrossel4.webp",
      priceOld: " R$326.79",
      priceCurrent: " R$171,49",
      installments: "",  
       stockStatus: 'Em estoque'
    }, 
    {   
      id:"21",
      name: "Presente Eud Kids Sh+Cond+Col Era Uma Vez",
      description: "Solte a imaginação com Eudora Kids!Cabelos macios, perfumados e prontos para qualquer aventura!O kit Eudora Kids é perfeito para deixar a hora do banho ainda mais divertida.Com fórmulas suaves e deliciosas fragrâncias, os pequenos vão adorar.",
      image: "asts/Novidade-Para-Carrossel-5.jpg",
      priceOld: " R$125.97",
      priceCurrent: "R$89.90",
      installments: "",  
       stockStatus: 'Em estoque'
    }, 
    {   
      id:"22",
      name: "Combo Sh+Cond Cica Therapy 400Ml",
      description: "O perfume e a loção hidratante que vão deixar sua pele irresistível!A fragrância encantadora e a textura suave da loção hidratante vão te proporcionar momentos de prazer e cuidado.Ideal para quem busca sofisticação e um toque de elegância o dia todo.",
      image: "asts/NovidadeParaCarrossel6.jpg",
      priceOld: " R$264.78",
      priceCurrent: "R$159.90",
      installments: "",  
       stockStatus: 'Em estoque'
    }
        ]; 
     // Obtém o campo de pesquisa e o container de resultados
     const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
     const resultsContainer = document.getElementById("resultados-pesquisa");
 
     // Verifica se o campo de pesquisa está vazio
     if (!campoPesquisa) {
         resultsContainer.innerHTML = `
             <div class="alert alert-warning" role="alert">
                 Nada foi encontrado. Você precisa digitar o nome de um produto ou uma palavra-chave.
             </div>`;
         return;
     }
 
     // Inicializa os resultados
     let resultados = "";
 
     // Percorre os produtos para verificar correspondências
     for (const product of products) {
         const name = product.name.toLowerCase();
         const description = product.description.toLowerCase();
 
         if (name.includes(campoPesquisa) || description.includes(campoPesquisa)) {
             resultados += `
                 <div class="col-md-4 mb-4">
                     <div class="card h-100">
                         <img src="${product.image}" class="card-img-top" alt="${product.name}" 
                             onerror="this.onerror=null; this.src='path/to/default-image.jpg';">
                         <div class="card-body">
                             <h5 class="card-title">${product.name}</h5>
                             <p class="card-text">${product.description}</p>
                             <p class="card-text">
                                 <del>${product.priceOld}</del>
                                 <strong>${product.priceCurrent}</strong>
                             </p>
                             <p class="card-text"><strong>Status:</strong> ${product.stockStatus}</p>
                             <p class="card-text"><strong>Parcelas:</strong> ${product.installments}</p>
                             <button class="btn btn-primary" onclick="addToCart('${product.name}')">Adicionar ao Carrinho</button>
                             <button class="btn btn-secondary mt-2" onclick="showProductCard(${JSON.stringify(product)})">Ver Produto</button>
                         </div>
                     </div>
                 </div>`;
         }}
 
     // Caso nenhum resultado seja encontrado
     if (!resultados) {
         resultados = `
             <div class="alert alert-danger" role="alert">
                 Nenhum produto encontrado com o termo "${campoPesquisa}".
             </div>`;
     }
 
     // Atualiza o container com os resultados
     resultsContainer.innerHTML = `<div class="row">${resultados}</div>`;
 }  
    // Função para mostrar o card do produto em um modal
    function showProductCard(product) {
        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade');
        modal.setAttribute('tabindex', '-1');

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');
        modalHeader.innerHTML = `<h5 class="modal-title">${product.name}</h5>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        modalBody.innerHTML = `<img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
                               <p>${product.description}</p>
                               <p><del>${product.priceOld}</del> <strong>${product.priceCurrent}</strong></p>`;

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        document.body.appendChild(modal);

        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();

        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });
    }   
        
   