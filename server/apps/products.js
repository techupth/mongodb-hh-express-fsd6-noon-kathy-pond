import { Router, json } from "express";
import { db } from "../utils/db.js";

const productRouter = Router();

productRouter.get("/", (req, res) => {
    const collection = db.collection("products") 

    const products = collection
    return res.json({data: products })
});

productRouter.get("/:id", (req, res) => {});

productRouter.post("/", async(req, res) => {
    const collection = db.collection("products")
    const productData = {...reqbody};
    const product = await collection.insertOne(productData)

    return res.json({
        message: "Product has been created successfully"
    })
});

productRouter.put("/:id", async(req, res) => {
    const collection = db.collection("products")
    const productId = ObjectId(req.params.productId)
    const newProductData = {...req.body};

    await collection.updateOne(
        {
            _id: productId,
        },
        {
            $set: newProductData,
        }
    );
    return res.json({
        message: "Product has been updated successfully"
    })
});

productRouter.delete("/:id", async(req, res) => {
    const collection = db.collection("products")

    const productId = ObjectId(req.params.productId);

    await collection.deleteOne({
        _id: productId
    })
    return res.json({ 
        message: "Product has been deleted successfully"
    })
});

export default productRouter;
