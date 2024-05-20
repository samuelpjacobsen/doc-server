# Doc Server

Este é um projeto simples de servidor web usando Express.js que serve arquivos estáticos, como PDFs, para teste. Ele utiliza CORS para permitir solicitações de outros domínios.

## Funcionalidades

- Servir arquivos estáticos a partir da pasta `public`.
- Fornecer um endpoint para baixar um arquivo PDF (`laudo.pdf`).

## Dependências

- [express](https://www.npmjs.com/package/express): ^4.19.2
- [cors](https://www.npmjs.com/package/cors): ^2.8.5

## Instalação

1. Clone o repositório para sua máquina local:
    ```sh
    git clone https://github.com/samuelpjacobsen/pdf-server.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd pdf-server
    ```

3. Instale as dependências do projeto:
    ```sh
    npm install
    ```

## Uso

1. Coloque os arquivos que você deseja servir na pasta `public`.

2. Inicie o servidor:
    ```sh
    node server.js
    ```

3. O servidor estará rodando em `http://localhost:8080`. Você pode acessar o arquivo PDF em `http://localhost:8080/laudo.pdf`.


