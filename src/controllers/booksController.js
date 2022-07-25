import books from "../models/Book.js";

class BookController {

    static listBooks = (req, res) => {
        books.find()
        .populate('author')
        .exec((err, books) => {
            res.status(200).json(books);
        });
    }
    
    static searchBook = (req, res) => {
        const id = req.params.id;
    
        books.findById(id)
        .populate("author", "name")
        .exec((err, book) => {
            if(!err) {
                res.status(200).send({message: book})
            } else {
                res.status(404).send({message: `${err.message} - id not found.`})
            }
        })
    }

    static createBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - error registering book.`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Book updated successfully"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Book removed successfully."})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static searchBookForPublisher = (req, res) => {
        const publisher = req.query.publisher;

        books.find({"publisher": publisher}, {}, (err, books) => {
            if (!err) {
                res.status(200).send(books);
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }

}

export default BookController