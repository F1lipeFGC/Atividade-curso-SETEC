import express from "express";
import {
    createItems,
    getItems,
    updateItems,
    deleteItems,
    deleteAllItems,
} from "../Controller/item.controller.js";
import count  from "console";

const router = express.Router();

router.post("/items", createItems);
router.get("/items", getItems);
router.put("/items/:id", updateItems);
router.delete("/items/:id", deleteItems);
router.delete("/items", deleteAllItems);

export default router;