document.addEventListener('DOMContentLoaded', function() {
  // Menu lateral (mantido o mesmo código)
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
  } else {
      console.error("Menu elements not found");
  }

  // Autocomplete
  const products = [
    { name: 'Kits de tratamento para cabelos', image:'asts/Imagens de produtos 1.webp' },
    { name: 'Kit Presente Eudora Ruge + Creme Hidratante corporal', image:'asts/Imagens de produtos tipo2.png' },
    { name: 'Eudora MK', image:'asts/Imagem de produtos 3.jpg' },
    { name: 'Kit para corpo e banho (Combo intance Maracujá)', image:'asts/Imagens de Produtos 4.webp' },
    { name: 'Combo Cauterização dos lisos: Shampoo cachos e crespos 250ml + Condicionador cachos e crespos 200ml + Ativador de cachos 100ml + Creme para Pentear cachos e crespos 450g', image:'asts/1 Imagems de Produtos para compra.webp', price:"por R$53,99" },
    { name: 'Combo retrô: Desodorante colônia 95ml + Loção hidratante desodorante corporal 200ml', image:'asts/2 Imagem de Produtos para compra.webp' },
    { name: 'Combo maquiagem para os olhos: mascara soul 7.0 + lapiseira retrátil para olhos', image:'asts/3 Imagem de Produto para compra.webp' },
    { name: 'Combo instancia Ameixa e Praliné: (5 itens): Creme perfumado para as mãos 30g + Spray Perfumado desodorante colônia 200ml + Creme hidratante desodorante corporal + fondue hidratante desodorante corporal 180ml e sabonete vegetal corporal em barra', image:'asts/4 Imagem de Produtos para Compra.webp' },
    { name: 'Combo Eudora Shampoo Nutri óleos Poderosos 250ml + Condicionador Nutri óleos Poderosos 200ml + Sabonete anteacnes Neo dermo 80g', image:'asts/5 Imagem DE Produto Para Compra.webp' },
    { name: 'Combo corpo e banhos Instance Karité (4 itens) Sabonete Vegetal em Barra Perfumado 4x80g', image:'asts/6 Imagem de Produto Para compra.webp' },
    { name: 'Impression Eau De Parfum 100ml', image:'asts/7 Imagem de Produto Para Compra.webp' },
    { name: 'Eudora Unique Eau de Parfum 75ml', image:'asts/8 Imagem De Produto Para Compra.webp' },
    { name: 'Combo combate o Frizz: Shampoo 250ml + Condicionador 200ml + Leave In 100ml', image:'asts/Produto Em Promoção 1 (2).webp' },
    { name: 'Combo regeneração pós-química Shampoo 250ml + Condicionador 200ml', image:'asts/Produto Em Promoção2.webp' },
    { name: 'Chic: Colônia Desodorante Chérie 95ml', image:'asts/Produto Em Promação 3.webp' },
    { name: 'Club 6: Desodorante Colônia 96ml', image: 'asts/Produto Em Promoção 4.webp' },
    { name: 'Combo Soul: Lapiseira Retrátil 350mg + Delineador Líquido Preto 2,5ml + Lápis para sobrancelha Médio Escuro 1,1g', image:'asts/Produto Em Promoção 5.webp' },
    { name: 'Kit Skin Perfection Pó Solto + Primer Matte + Bruma Fixadora', image: 'asts/Produto Em Promoção 6.webp' },
    { name: 'Combo Instance Lima Rosa: Loção Corporal 400ml + Gelato Hidratante Desodorante Corporal 200g', image: 'asts/Produto Em Promoção 7.webp' },
    { name: 'Combo Gel de Limpeza Neo Dermo 150g + Loção Corporal 150ml + Blush Líquido 15ml', image: 'asts/Produto Em Promoção 8.webp' },   
  ];

  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('autocomplete-results');

  if (searchInput && resultsContainer) {
      console.log("Search elements found");

      searchInput.addEventListener('input', () => {
          const query = searchInput.value.toLowerCase();
          resultsContainer.innerHTML = '';

          if (query) {
              const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

              filteredProducts.forEach(product => {
                  const item = document.createElement('div');
                  item.classList.add('autocomplete-item');

                  const img = document.createElement('img');
                  img.src = product.image;
                  img.alt = product.name;
                  img.style.width = '100px';  // Ajuste o tamanho da imagem conforme necessário

                  const text = document.createElement('span');
                  text.textContent = product.name;

                  item.appendChild(img);
                  item.appendChild(text);

                  item.addEventListener('click', () => {
                      showProductCard(product);
                  });

                  resultsContainer.appendChild(item);
              });
          }
      });

      document.addEventListener('click', (event) => {
          if (event.target !== searchInput && event.target !== resultsContainer) {
              resultsContainer.innerHTML = '';
          }
      });
  } else {
      console.error("Search elements not found");
  }

  // Função para mostrar o card do produto
  function showProductCard(product) {
      // Criar elementos do card
      const modal = document.createElement('div');
      modal.classList.add('modal');

      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      const closeBtn = document.createElement('span');
      closeBtn.classList.add('close');
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
      });

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;
      img.style.width = '200px';  // Ajuste o tamanho da imagem conforme necessário

      const name = document.createElement('h2');
      name.textContent = product.name;

      // Adicionar elementos ao modal
      modalContent.appendChild(closeBtn);
      modalContent.appendChild(img);
      modalContent.appendChild(name);
      modal.appendChild(modalContent);

      // Adicionar modal à página
      document.body.appendChild(modal);

      // Exibir modal
      modal.style.display = 'block';
  }
});
