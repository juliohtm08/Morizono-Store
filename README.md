# Morizono Store

## O que é?
  <p>Este projeto consite em um sistema de carrinho de compras desenvolvido com React JS. Nele possui a listagem de produtos, a busca de produtos, utilizando a API do Mercado Livre, 
adição e remoção de itens do carrinho de compras. Projeto inicial: https://www.youtube.com/watch?v=HSAlJJI6K_A</p>  
<p>
  Neste projeto pude realizar alterações minhas como melhorar a performace do carrinho, visto que ao adicionar itens iguais ao carrinho, as KEYs corrompiam, 
  logo consertei este problema reforçando ainda mais que cada item fosse único, onde a chave KEY usada para cada elemento do array é o índice(index) do array.
  Já no código inicial a chave pe o 'id' do item('cartItem.id'). <br>
</p>
<p>
  Outro problema encontrado foi que caso tivesse produtos iguais no carrinho e o usuário desejasse
  remover apenas único produto repetido, todos os produtos iguais eram removidos. Assim resolvi este problema também, onde usei a combinação de 'slice' e propagação ('...')
  para criar um novo array sem o item a ser removido. <br>
  Código inicial: <br> 
  
</p>


## Funcionalidades

* Buscar produtos: É possível realizar a busca de qualquer produto que esteja na API do Mercado Livre utilizando palavras-chaves;
* Listar produtos: Ao realizar Busca do produto, eles serão listados e exibidos para o usuário, contendo o título do produto, sua descrição e seu preço;
* Adicionar itens ao carrinho: É possível adicionar itens ao carrinho de compras, além disso, seus preços serão somados e o valor total será exibido para o usuário;
* Remocer itens do carrinho: É possivel remover os itens do carrinho de compras, e com isso o valor total diminuirá conforme as remoções;

## Tecnologias utilizadas
* React JS
* HTML5
* CSS3
* API do Mercado Livre

## Imagens
### a)Tela Inicial
![imagem da tela inicial](https://github.com/juliohtm08/morizono-store/assets/102925073/b45df1c0-eb06-4351-8af4-ecd1a925d09a)

### b)Tela do Carrinho de compras
![imagem do carrinho](https://github.com/juliohtm08/morizono-store/assets/102925073/81219d50-d738-4a4d-bcab-ace341213e91)
