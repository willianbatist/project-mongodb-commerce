db.produtos.find({ ingredientes: { $eq: "picles" } }, 
    { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: [0, 3] } });