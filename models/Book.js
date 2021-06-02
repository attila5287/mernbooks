const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

// `title` Title of the book from the Google Books API|
// `authors` The books's author(s) as returned from the Google Books API|
// `description` The book's description as returned from the Google Books 
// `image` The Book's thumbnail image as returned from the Google Books 
// `link` The Book's information link as returned from the Google Books 

const BookSchema = new Schema( {
  title: {
    type: String,
    required: true,
    default: "Untitled"
  },
  description: {
    type: String,
    required: true,
    default: "Description to be inserted."
  },
  image: {
    type: String,
    required: true,
    default: "https://books.google.com/books/content?id=rAm1AAAAIAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70CXyvhykgrOaDolRdLHgVaUJlegkeScNgXRI4wO15n8Vvue_xnBimqwVsOJctNofufkujvhEaKkMxAFD56sr0B1xkUd4N_m50M7P2pkHlioxdmi0JauMdij1hsuZS4fRq9UAEA"
  },
  link: {
    type: String,
    required: true,
    default: "https://books.google.com/books?id=rAm1AAAAIAAJ&source=gbs_similarbooks"
  },
  authors: [ {
    author: {
      type: String,
      required: true,
      default: "Anonymous",
      trim: true
    },
  } ]
} )

const Book = mongoose.model( "Book", BookSchema );

module.exports = Book;
// module.exports = Workout;
