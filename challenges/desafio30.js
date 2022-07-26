db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });
db.produtos.find({
    $or: [
            { nome: "Big Mac" },
            { curtidas: { $exists: true } },
        ],
    }, { _id: 0, nome: 1, curtidas: 1 });