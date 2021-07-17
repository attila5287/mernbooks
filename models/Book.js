const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

// `title` Title of the book from the |
// `authors` bks's author(s) |
// `description` bk's description via GB 
// `image` bk's thumbnail image via GB 
// `link` bk's information link via GB 

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
  author: {
    type: String,
    required: true,
    default: "AnonWriter"
  },
} )

const Book = mongoose.model( "Book", BookSchema );

module.exports = Book;
// module.exports = Workout;
