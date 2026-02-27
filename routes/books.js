const router = require("express").Router();
const Book = require("../models/Book");


// ➕ ADD BOOK
router.post("/add", async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
    });

    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).json(err);
  }
});


// 📖 GET ALL BOOKS
router.get("/all", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ❌ DELETE BOOK (optional but good for marks 😄)
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json("Book deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;