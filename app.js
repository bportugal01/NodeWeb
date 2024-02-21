// Importa o módulo 'http' do Node.js
var http = require("http");

// Cria um servidor HTTP na porta 8081
http.createServer(function (req, res) {
    // Envia "Hellou Mundou" como resposta para qualquer requisição recebida
    res.end("Hellou Mundou");
}).listen(8081); // Faz o servidor escutar na porta 8081

// Imprime mensagem no console informando que o servidor está rodando
console.log("O servidor está rodando!");
