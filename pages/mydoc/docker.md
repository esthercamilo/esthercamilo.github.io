---
title: Supported features
tags:
  - docker
keywords: "docker"
last_updated: "August 31, 2023"
summary: "Virtualização."
published: true
sidebar: mydoc_sidebar
permalink: docker.html
folder: mydoc
---

## O que é docker
Docker é uma plataforma de virtualização, ou seja, um programa capaz de gerenciar e armazenar sistemas operacionais 
dentro de uma máquina com um sistema operacional. Isso é bastante útil para:

1. Portabilizar aplicações: uma vez construída uma imagem, você pode levar para vários lugares - núvem ou outros computadores que tenham o docker instalado.
2. Isolamento: uma vez construída uma imagem com uma finalidade, não há risco de que a instalação de outros programas ou dependências causarão problemas.

Dentre as desvantagens tamanho da imagem pode aumentar, overhead de desempenho principalmente em operações I/O.

## O que não é docker
Docker não é uma máquina virtual. O docker é mais leve e, apesar de ser possível acessar a linha de comando de um container
docker, seu propósito não é interação com usuário. As máquinas virtuais, por outro lado, objetivam simular uma máquina real em todas as interações.

## Uso básico
Após instalar o docker em seu computador, é possível "containerizar" uma aplicação por dois modos:
1. criando somente um Dockerfile
2. criando o docker-compose.yml para orquestração de vários serviços ("Dockerfiles" ou imagens)

Baixar uma imagem do Docker Hub para o seu sistema local.
```docker pull [nome_da_imagem]:[versão]``` 

Criar e iniciar um contêiner com base na imagem especificada. Por exemplo: docker run -d -p 80:8080 nome_da_imagem.
```docker run [opções] [nome_da_imagem]:[versão]:``` 

Listar os contêineres em execução no momento.
```docker ps``` 

Listar todos os contêineres, incluindo os que não estão em execução.
```docker ps -a```

Executar um comando dentro de um contêiner em execução.
```docker exec -it [nome_do_contêiner] [comando]``` 

Parar a execução de um contêiner específico.
```docker stop [nome_do_contêiner]``` 

Iniciar um contêiner que foi parado.
```docker start [nome_do_contêiner]``` 

Remover um contêiner específico.
```docker rm [nome_do_contêiner]``` 

Remover uma imagem do seu sistema local.
```docker rmi [nome_da_imagem]:[versão]``` 

Listar as imagens disponíveis no sistema.
```docker images``` 

Criar uma nova imagem a partir de um Dockerfile.
```docker build -t [nome_da_imagem]:[versão] [caminho_para_o_dockerfile]```

Iniciar serviços definidos em um arquivo docker-compose.yml.
```docker-compose up```

### Exemplo de dockerfile

```
# Usa uma imagem base, geralmente um sistema operacional mínimo.
FROM ubuntu:latest

# Define o mantenedor (autor) da imagem.
LABEL maintainer="seu-email@example.com"

# Executa atualizações no sistema operacional dentro do contêiner.
RUN apt-get update && apt-get upgrade -y

# Instala um software no contêiner.
RUN apt-get install -y nginx

# Copia um arquivo local para dentro do contêiner.
COPY index.html /var/www/html/

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /var/www/html/

# Expõe uma porta que será usada para acessar o aplicativo.
EXPOSE 80

# Comando a ser executado quando o contêiner for iniciado.
CMD ["nginx", "-g", "daemon off;"]
``` 

### Exemplo de docker-compose.yml

Lembre-se que a instação do docker-compose é a parte

```
version: '3'  # Versão do formato do docker-compose.yml

services:    # Define os serviços (contêineres) a serem executados
  web:       # Nome do serviço
    image: nginx:latest  # Imagem a ser usada para o serviço

    ports:
      - "80:80"  # Mapeia a porta 80 do host para a porta 80 do contêiner

    volumes:
      - ./html:/usr/share/nginx/html  # Monta um volume do host para o contêiner

    networks:
      - mynetwork  # Conecta o serviço à rede 'mynetwork'

networks:
  mynetwork:  # Define a rede 'mynetwork'
``` 
## Links

Vídeo com projeto Django em container docker

[![Projeto Django em Container Docker](https://esthercamilo.github.io/images/django_docker_youtube.png)](https://www.youtube.com/watch?v=_yDWXn-NeW0)



{% include links.html %}
