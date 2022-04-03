const axios = require('axios');
const http = require('http');
const https = require('https');



/**
 * Crea una instancia personalizada de axios, esto con el fin de mantener en un solo lugar la configuracion por defecto de una peticion http
 * Autor: Andres Felipe Gomez Parada
 */
module.exports = axios.default.create({

    // 60 segundos de espera o timeout
    timeout: 60000,

    // Mantiene los grupos vivos y reutiliza las conexiones TCP, haciéndolo más rápido
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),

    // Siga hasta un maximo de 10 HTTP redirecciones
    maxRedirects: 10,

    // Limita la longitud máxima de contenido que aceptaremos a 50 MB, por si acaso
    maxContentLength: 50 * 1000 * 1000,

});


