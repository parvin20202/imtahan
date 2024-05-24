const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Schema } = mongoose;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

const port = 8080;
const DB_URL =
    "mongodb+srv://23yanvarimtahan:23yanvarimtahan@cluster0.iljorev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ProductSchema = new Schema(
    {
        imageUrl: { type: String, require: true },
        name: { type: String, require: true },
        description: { type: String, require: true },
    },
    { timestamps: true }
);





const ProductModel = mongoose.model("Product", ProductSchema);
app.get("/api/products", async (req, res) => {
    try {
        const products = await ProductModel.find({});

        if (products.length > 0) {
            res.status(200).send({ message: "success", data: products });
        } else {
            res.status(204).send({
                message: "data is empty",
                data: null,
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);

        if (product) {
            res.status(200).send({
                message: "success",
                data: product,
            });
        } else {
            res.status(404).send({ message: "data not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});



app.post("/api/products", async (req, res) => {
    try {
        const newProduct = new ProductModel({ ...req.body });
        await newProduct.save();

        res.status(201).send({ message: "created succesfully!", data: newProduct });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        res.status(200).send({
            message: "deleted succesfully!",
            deletedProduct: deletedProduct,
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

mongoose.connect(DB_URL).then(() => {
    console.log("Connected!");
    app.listen(port, () => {
        console.log(`Link:  http://localhost:${port}`);
    });
});


