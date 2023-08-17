---
title: CI/CD
tags: [ci/cd, qualidade]
keywords: entrega contínua, qualidade
last_updated: Aug 16, 2023
summary: "Automatização do processo de implantação de código garantindo detecção precoce de erros e conflitos, promovendo mais qualidade"
sidebar: mydoc_sidebar
permalink: ci_cd.html
folder: mydoc
toc: false
---

## Introdução

Recentemente transferi algumas aplicações para docker. Para quem não utiliza, docker é plataforma para virtualização
de containers. Em outras palavras é como se cada aplicação tivesse sua própria máquina. 
Mas o que é mais interessante sobre docker é que você pode construir e reconstruir essa máquina sempre que necessário
a partir de um arquivo de configuração.

A ideia de transferir as aplicações para Docker veio do desconforto causado por todas as aplicações serem servidas
em virtual-host do apache2 e todas as vezes que precisávamos reiniciar uma aplicação era necessário reiniciar todas.
Ou seja, o indivíduo que nada tinha a ver com a correção era afetado por indisponibilidade temporária do sistema. 

Sim, há outras soluções para esse problema. Porém decidimos que era momento de "containerizar" nossas aplicações também 
por outros motivos, dentre eles:

- facilitar a criação de ambiestes de testes e homologação;
- ter mais controle sobre as depedências a serem instaladas;
- e finalmente e talvez o mais importante: implantar testes automatizados.

Descobrimos porém, que somente a containerização não era a solução completa de que precisávamos.

## Integração contínua / Entrega contínua

<blockquote>
Quando a simples ideia de fazer alterações no código causa apreensão, é um sinal claro de que é 
necessário realizar modificações no próprio código.  
</blockquote>

Sempre soubemos da necessidade dos testes automatizados e até criamos muitos.
Porém nosso método de testes era assim: **clique-direito** no botão de testes, run. Todos verdes -> produção.
Mas há um problema crítico nesse fluxo. E está implícito no item destacado. Um humano precisa clicar e ver o resultado, 
quando o ideal é que a implantação da aplicação esteja condicionada à execução dos testes.

Inocentemente criei meu próprio pipeline. Dentro do dockerfile eu escrevi as condicionais para verificação
dos testes e a aplicação final só era construída caso os testes passassem. Funcionou? Sim!
Mas pra quê reinventar a roda? E provavelmente meu pipeline tinha muitos furos.

Vi muitas soluções na núvem, porém eu precisava de uma ferramenta CI/CD que rodasse localmente.
Em minhas pesquisas descobri uma ferramenta que já faz tudo isso de uma maneira segura, pois já previram todos os 
problemas e desafios que eu, com certeza, não teria previsto em uma semana, o Jenkins.

## Jenkins

O Jenkins é uma ferramenta escrita em Java que possui uma interface gráfica onde você pode configurar e executar seus
jobs. Durante meu desenvolvimento percebi que os seguintes pontos são cruciais:

1. Instalação da aplicação. 
2. Instalação dos plugins necessários para o build da aplicação: no meu caso precisei do plugin git e docker;
3. Lembrar que o que você precisa no Jenkins precisa estar instalado na máquina host, por exemplo, git.
4. Configurar caminhos. Alguns ele encontra fácil, outros necessitam configuração.
5. Saber escrever um Jenkins pipeline básico.

A partir daí, acredito que já pode dar os primeiros passos na utilização do Jenkins. Fiz um vídeo para ilustrar
a execução de pipeline com testes. 






{% include links.html %}

