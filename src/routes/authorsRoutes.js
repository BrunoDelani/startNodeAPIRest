import express  from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
    .get("/author", AuthorController.listAuthors)
    .get("/author/:id", AuthorController.searchAuthor)
    .post("/author", AuthorController.createAuthor)
    .put("/author/:id", AuthorController.updateAuthor)
    .delete("/author/:id", AuthorController.deleteAuthor)
    

export default router;