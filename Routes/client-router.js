import { Router } from "express";
import products from "../models/productSchema.js";



const clientRouter = Router();

clientRouter.get("/products/:category", async (req, res) => {
    const filteredByCategory = await products.find({ category: req.params.category });

    res.send(filteredByCategory);

});

clientRouter.post("/filtered", async (req, res) => {
    const body = { ...req.body };
    Object.keys(body).forEach(function (key) {
        if (!body[key]) delete body[key];
    });

    const filtered = await products.find({ ...body, price: { $gt: req.body.price.start, $lt: req.body.price.until } })


    res.send(filtered);
})


export default clientRouter;