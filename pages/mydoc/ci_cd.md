---
title: CI/CD
tags: [ci/cd, qualidade]
keywords: entrega contínua, qualidade
last_updated: Aug 16, 2023
summary: "Automatização do processo de implantação de código garantindo detecção precoce de erros e conflitos, promovendo mais qualidade"
sidebar: mydoc_sidebar
permalink: ci_cd.html
folder: mydoc
---

## Introdução

Recentemente transferi algumas aplicações para containers docker. Para quem não utiliza, docker é plataforma para virtualização
de containers. Em outras palavras é como se cada aplicação tivesse sua própria máquina. 
Mas o que é mais interessante sobre docker é que você pode construir e reconstruir sempre que for necessário.
E aí me vem um dos meus pensamentos mais importantes:

<blockquote>
Se a ideia de recriar algo gera apreensão significa que a estruturação do programa não foi executada de maneira adequada
</blockquote>

Para ilustrar essa problemática, vou utilizar um exemplo prático: imagine uma aplicação geradora de relatórios. 
Se realizar alterações nesse relatório se torna uma tarefa temida, isso pode ser um sinal de que a estrutura 
do código subjacente não foi desenvolvida com a flexibilidade necessária para acomodar mudanças com facilidade
e confiança.

Mas qual a metodologia para viabilizar alterações frequentes e ao mesmo tempo não permitir que o código seja quebrado?

## Integração contínua / Entrega contínua

Apesar dos pipelines de integração contínua facilitarem tarefas repetitivas, tais como o build dos containers e pulling
do repositórios de versionamento eu quero falar da parte que julgo mais importante: os testes.

Os testes não podem ficar nas mãos de humanos. Eles devem ser parte do processo de implantação. 


Estou usando Jenkins... tá tarde, amanhã eu continuo explicando como eu configurei o jenkins e tudo mais




{% include links.html %}

