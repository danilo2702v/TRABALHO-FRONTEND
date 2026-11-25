# Moto Cariri

Site de uma loja de motos feito em SPA (Single Page Application) para a atividade de
Desenvolvimento Web.

## Framework

Bootstrap 5.3 (CSS e JavaScript).

## Sobre o site

O site é de uma loja de motos. A pessoa pode ver os modelos, filtrar pelo tipo ou pelo
nome, simular quanto vai ficar a parcela do financiamento e mandar uma mensagem para a
loja.

A navegação não recarrega a página: o JavaScript troca só o conteúdo do meio da tela de
acordo com o endereço (#/motos, #/financiamento, #/contato).

Os modelos são reais (Honda e Yamaha) e os preços são os valores sugeridos de 2026, só
para o trabalho ficar mais parecido com uma loja de verdade. A loja em si é fictícia.

## Por que escolhi o Bootstrap

Porque ele já vem com as classes prontas para o site ficar responsivo (col-md-4, container,
row), então eu quase não precisei escrever CSS. E também porque ele já tem o menu que vira
sanduíche no celular, os cards, os formulários e os alertas prontos, o que me deixou focar
no JavaScript em vez de ficar ajustando estilo.

## Páginas

- `#/` inicio com banner e os destaques
- `#/motos` lista com busca e filtro por tipo
- `#/financiamento` simulador de parcela
- `#/contato` formulário com validação

## O que tem no código

- navegação SPA com `location.hash` e a função `mostrarPagina()`
- componente `criarCard()` reaproveitado na página inicial e na lista de motos
- filtro e busca em cima do array `motos`
- cálculo da parcela com juros de 1,5% ao mês
- formulário validado, com as mensagens guardadas no array `mensagens`

## Arquivos

```
index.html
css/estilo.css
js/script.js
```

## Como abrir

Abrir o arquivo index.html no navegador. Precisa de internet porque o Bootstrap vem pelo
CDN.
