Rodrigo
1. O projeto deve ser montado com, no mínimo, 2 pages, incluindo a home.page.html comum ao ionic. - 0.5 ponto 
    Nós preferimos iniciar o projeto ionic com a estrutura de tabs
    A estrutura de tabs, por padrão cria 3 páginas, e uma barra de navegação
    
    As tabs ficaram didividas assim:
    
    tab1.page.html - Página principal
    tab2.page.html - Página de pesquisa
    tab3.page.html - Página de detalhes

    A navegação é realizada por meio da barra de navegação que nos direciona para as rotas de cada página.


Victor
2. O projeto deve ter o uso da biblioteca HttpClient - 0.5 ponto
    HttpClient é disponibilizado na aplicação no arquivo main.ts e injetado no FilmeService por meio do construtor
    Sendo utilizado nos métodos buscarFilmes e buscarPorID
    Ambos os métodos fazem uma requisição get na api para retornar dados sobre os filmes relacionados a uma busca ou sobre um filme selecionado por meio de um ID

Antônio
3. Uma API deve ser usada (de escolha aberta, exceto o pokeapi, a não ser que se faça alguma coisa diferente da minha aula). Tem que haver, no mínimo, um método get. - 0.5 ponto
    Escolhemos uma API Gratuita que contém dados sobre filmes.
    A utilização da API no projeto é feita no FilmeService, por meio das requisições get que nos conecta a ela.
    As requisições são alteradas dinamicamente com a pesquisa feita pelo usuário e a apiKey.

Gabriel
4. O projeto deve ter, no mínimo, dois pipes, UM personalizado e UMA pipe builtin - 0.5 ponto cada  (total de 1 ponto) 
    tab2.page.html - Tem pipe built-in - que vem do import do CommonModule
    tab3.page.html - Tem pipe personalizada - que vem do import EstrelasPipe
    Definição da pipe personalizada está em pipes/estrelas-pipe.ts

Victor
5. O projeto deve ter, no mínimo, um service para alocar o uso do HttpClient.  - 1 ponto 
    services/movie.ts - que é usado na tab2.page.ts

Matheus
6. O projeto deve ter, no mínimo, UMA diretiva personalizada e duas diretivas estruturais (@if e @for).  - 0.5 ponto cada (total de 1,5 ponto) 
    Estruturais @if e @for estão em tab2.page.html
    Personalizada está em tab3.page.html 

Felipe
7. Pontuação extra: Passar um parâmetro por rota de uma página anterior para uma outra página. - 1 ponto
    Os parâmetros são passados por meio do método abrirDetalhes que está em tab2.page.ts.
    O método direciona para a página de detalhes e passa o id do filme selecionado como parâmetro, que vai ser utilizado para buscar dados na API

    