# DOCUMENTAÇÃO

### Autores

Danilo Aparecido Namitala - 202011125

Fabrício de Oliveira Carvalho - 201910388

### Sumário

* [Criação do App](#Criação-do-App)
* [Dockerfile](#Dockerfile)
* [Compilação e publicação](#Compilação-e-publicação)
* [Helm Chart](#Helm-Chart)

### Criação do App

Referencia: https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039

### Dockerfile

Arquivo simples usando a imagem `node:slim` 

- Defina a pasta de trabalho
- Copia os arquivos para a pasta
- Instala as dependencias
- Expõe a porta da aplicação
- Define o comando de execução

### Compilação e publicação

compilar:
```bash
docker build -t daniloufla/trab_final:1.0.1 .
```

login: 
```bash 
docker login
```

publicação:
```bash
docker push daniloufla/trab_final:1.0.1
```
Execução (testar a imagem):
```bash
docker run -d -p 3000:3000 daniloufla/trab_final:1.0.1
```

### Helm Chart