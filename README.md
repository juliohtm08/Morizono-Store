# Morizono Store - Shopping Cart

## O que é?
Este projeto consite em um sistema de carrinho de compras desenvolvido com React JS. Nele possui a listagem de produtos, a busca de produtos, utilizando a API do Mercado Livre, 
adição e remoção de itens do carrinho de compras. <br>
Projeto inicial: https://www.youtube.com/watch?v=HSAlJJI6K_A

## Alterações

Neste projeto pude realizar algumas alterações como melhorar a performace do carrinho, visto que ao adicionar itens iguais ao carrinho, as KEYs corrompiam, 
logo consertei este problema reforçando ainda mais que cada item fosse único, onde a chave KEY usada para cada elemento do array é o índice(index) do array.
Já no código inicial a chave era o 'id' do item('cartItem.id'). (src/components/CarItem/CartItem.jsx)
### Código antigo:
![cod antigo remover item](https://github.com/juliohtm08/morizono-store/assets/102925073/066fd020-7f2b-44fc-bbf9-5971fc06365d)
### código atualizado: 
![cod atual remover item](https://github.com/juliohtm08/morizono-store/assets/102925073/f7bd890a-946e-4158-b880-4348ca46a24b)
    
Outro problema encontrado foi que caso tivesse produtos iguais no carrinho e o usuário desejasse
remover apenas único produto repetido, todos os produtos iguais eram removidos. Assim resolvi este problema também, onde usei a combinação de 'slice' e propagação ('...')
para criar um novo array sem o item a ser removido. (src/components/Cart/Cart.jsx)
### Código antigo: 
![cod antigo key](https://github.com/juliohtm08/morizono-store/assets/102925073/144379c6-4513-496d-a076-c362d0312cb6)
### Código atualizado:
![cod atual key](https://github.com/juliohtm08/morizono-store/assets/102925073/559fb424-7726-41a7-9246-4e055bd3df25)

Além dessas alterações, tive a liberdade de estilizar o site da maneira que eu desejasse, alterando as cores do backgroud, da header, do carrinho, 
adicionando uma logo e um fav-icon da loja, entre outras desse tipo.

## Funcionalidades

* Buscar produtos: É possível realizar a busca de qualquer produto que esteja na API do Mercado Livre utilizando palavras-chaves;
* Listar produtos: Ao realizar Busca do produto, eles serão listados e exibidos para o usuário, contendo o título do produto, sua descrição e seu preço;
* Adicionar itens ao carrinho: É possível adicionar itens ao carrinho de compras, além disso, seus preços serão somados e o valor total será exibido para o usuário;
* Remover itens do carrinho: É possivel remover os itens do carrinho de compras, e com isso o valor total diminuirá conforme as remoções;

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

 ## Confira o resultado final 
 link: https://morizono-store.vercel.app/
