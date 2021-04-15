const fs = require('fs')

fs.readFile("./assets/thixa.jpg", (err, buffer) => {
    console.log('imagem para buffer');
    console.log(buffer);

    fs.writeFile("./assets/thixaRecebido.jpg", buffer, (err) => {
        console.log('imagem escrita com sucesso');
    })
})