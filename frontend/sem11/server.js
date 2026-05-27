const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/products", (req,res) => {
    const products = [
        { id: 1, name: "Produto 1", price: 100 },
        { id: 2, name: "Produto 2", price: 150 },
        { id: 3, name: "Produto 3", price: 200 }
    ];

    res.status(200).json(products);
})

app.get("/", (req,res)=>{
    res.send(`
        <html>

            <head>

                <title> E-commerce </title>

                <style>
                
                    * {
                        font-family: 'Arial Bold', sans-serif;
                    }

                </style>

            </head>

            <body>

                <h1>Lista de Produtos</h1>
                <ul id="products-list"></ul>

                <script>
                    fetch("/products")
                    .then(res => res.json())
                    .then(products => {
                        const list = document.getElementById("products-list");
                        
                        products.forEach(product => {
                            const li = document.createElement("li");
                            li.innerHTML = product.name + "- R$ " + product.price + '<button>Adicionar ao Carrinho</button>';
                            list.appendChild(li);
                        })
                    })

                </script>

            </body>

        </html>
    `)
})

app.listen(port, ()=>{
    console.log(`Rodando em http://localhost:${port}`);
})