import express  from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
    .get("/book", BookController.listBooks)
    .get("/book/search", BookController.searchBookForPublisher)
    .get("/book/:id", BookController.searchBook)
    .post("/book", BookController.createBook)
    .put("/book/:id", BookController.updateBook)
    .delete("/book/:id", BookController.deleteBook)
    

export default router;