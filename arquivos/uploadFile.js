const fs = require('fs')

fs.createReadStream("../assets/thixa.jpg")
    .pipe(fs.createWriteStream('../assets/thixaRecebido.jpg'))
    .on('finish', () => console.log('imagem escrita com sucesso'))