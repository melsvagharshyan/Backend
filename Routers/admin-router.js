import { Router } from "express";
import products from '../productSchema.js';

const adminRouter = Router();

adminRouter.get("/products", async (req, res) => {
    try {
        const colections = await products.find({});
        res.send(colections);
    } catch (error) {
        res.send(error);
    }
});

adminRouter.delete("/remove/:id", async (req, res) => {
    try {
        const deletedItem = await products.findByIdAndDelete(req.params.id);
        res.send(`Item ${deletedItem} was deleted`);
    } catch (error) {
        res.send(error);
    }

});

adminRouter.post("/add", async (req, res) => {
    try {
        const product = await products.create(req.body);
        res.send(product);
    } catch (error) {
        res.send(error);
    }
});


export default adminRouter;