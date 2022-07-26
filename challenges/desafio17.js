db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: 5 });
db.resumoProdutos.findOne({}, { _id: 0, franquia: 1, totalProdutos: 1 });