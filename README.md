![react-badge](https://raw.githubusercontent.com/attila5287/img_readme/main/new/react_badge_128.png)
===
## Google Books Search

![heroku](https://raw.githubusercontent.com/attila5287/img_readme/main/new/heroku_text_128.png)
===
 ## https://mernbooks.herokuapp.com 

```
Node, Express and MongoDB so that users can save books to review or purchase later.
```
In this activity, you'll create a new React-based Google Books Search app. 

- [ ] -  create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. 

- [ ] -  Deploy this application using Heroku

This application requires at minimum 2 pages, check out the following mockup images for each page:

- [ ] -  [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.
- [ ] - [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

- [x] - 1. Start by using the `create-react-express` boilerplate

- [x] - 2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

- [ ] - 3. Using mongoose, then create a Book schema.

- [ ] - 4. At a minimum, books should have each of the following fields:

![react](https://raw.githubusercontent.com/attila5287/img_readme/main/new/react_text.ico)
|DB|MODEL|
|---|---|
| `title` | Title of the book from the Google Books API|
| `authors` | The books's author(s) as returned from the Google Books API|
| `description` | The book's description as returned from the Google Books API|
| `image` | The Book's thumbnail image as returned from the Google Books API|
| `link` | The Book's information link as returned from the Google Books API|

* Creating `documents` in your `books` collection similar to the following:

|DB|Document|
|---|---|
| authors: |  ["Suzanne Collins"] |
| description: |  "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are" |
| image: |  "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" |
| link: |  "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api" |
| title: |  "The Hunger Games" |

- [ ] - 5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

- [ ] - 5.1 The layout should include at least two React Components for each page `Search` and `Saved`.

- [ ] - 6. Add the following Express routes for your app:
|Express|Routes|
|---|---|
| `/api/books`     |  (get) - Should return all saved books as JSON. |
| `/api/books`     |  (post) - Will be used to save a new book to the database. |
| `/api/books/:id` |  (delete) - Will be used to delete a book from the database by Mongo `_id`. |

- [ ] -  `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

- [ ] - Deploy to Heroku once complete.
- [ ] - You must use Create React App and current versions of React and React-Router-Dom for this assignment.

- - -

- [ ] -  Bonus Live Updates to Saved Books
```
  * Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.
```




## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
