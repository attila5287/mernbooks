const db = require("../models");
// reactbookie 21.1/03 AJAX books
// Defining methods for the booksController
module.exports = {
  findAll: function ( req, res ) {
    return res.json([
			{
				title: 'Ataturk',
				
        authors: [
					'John Patrick Douglas Balfour Kinross',
					'Patrick Balfour Baron Kinross'
				],
				
        description:
					'The recent events in the Persian Gulf have made it clearer than ever that understanding the history of the Middle East is essential if a solution is to be found for its problems today. The story of Mustafa Kemal Ataturk is an important and enthralling part of that history. -- Amazon',
				
        image:
          'http://books.google.com/books/content?id=HnRpAAAAMAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73UtMGfear0qCTw3YY5jsRxtAn7uPZqPXF-ltmfXW57GVALVVQdT2_nUTkkpYNuavJKvj-uJT9vgjJPiagzNfoD3JG4R9cSlrcZfSOziGnDzRVPUC7IaricDMQzQ2F6IT1WVJRm&source=gbs_api',
        
				link: 'https://www.googleapis.com/books/v1/volumes/HnRpAAAAMAAJ'
			},
			{
				title: 'Ataturk II',
				
        authors: [
					'John Patrick Douglas Balfour Kinross',
					'Patrick Balfour Baron Kinross'
				],
				
        description:
					'The story of Mustafa Kemal Ataturk is an important and enthralling part of that history. -- Amazon',
				
        image:
          'http://books.google.com/books/content?id=HnRpAAAAMAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73UtMGfear0qCTw3YY5jsRxtAn7uPZqPXF-ltmfXW57GVALVVQdT2_nUTkkpYNuavJKvj-uJT9vgjJPiagzNfoD3JG4R9cSlrcZfSOziGnDzRVPUC7IaricDMQzQ2F6IT1WVJRm&source=gbs_api',
        
				link: 'https://www.googleapis.com/books/v1/volumes/HnRpAAAAMAAJ'
			},
		]);
  },
  find4ll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
