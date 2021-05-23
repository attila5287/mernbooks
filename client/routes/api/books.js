const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// /api/books`    /get/ Should return all saved books as JSON
// /api/books`    /post/ Will be used to save a new book to db
// /api/books/:id`/delete/ Will be used to delete a book from the database by 

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
