# Book Search Engine

![Screenshot of the book search page for a logged in user](/client/src/assets/images/screenshot.PNG "Screenshot of the book search page for a logged in user")

## Description

I was asked to take a fully functioning Google Books API search engine built with a RESTful API and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. Once refactored, the app should be deployed to Heroku using MongoDB Atlas for database hosting.

The app allows users to search the Google Books API search engine for book data. When a user logs in, they can add books to their personal library of saved books and remove them once read. The single-page application features a home page to search for books, as well as a saved books page that is visible when the user logs in.

## Deployment

The live application is deployed at [infinite-woodland-67161.herokuapp.com](https://infinite-woodland-67161.herokuapp.com/). Please see the Bugs section below for an update on the live deployment.

## Bugs

I am currently experiencing issues with the logic to save books to a user's library. I believe there is a syntax error either in the mutation that passes book data to the user's saved books array or the code to call that query. I am also running into a problem with the Heroku deployment that appears to be a database connection problem. In its current form, the app will build itself successfully on Heroku, but an application error prevents the page from being served.

I plan to return to this app to debug and fix these errors when I have more time, but unfortunately I need to move on to the next project before I can do that.

## Contact

Brett Piper

[GitHub](https://github.com/bpiper91) | [Email](mailto:bpiper91@gmail.com)
