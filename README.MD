# FeuilleFable

## Overview

What is this app?

Feuille Fable is a book journalling app. You can use this app to log books you read and your thoughts on each one. You can also make notes on the books you read to create a better connection with the book and make sure you don't forget the things you loved about the books you read.

### Problem

Some background...

I'm an avid reader and I love to use GoodReads to track my progress. The only issue is that their reviews are public and they don't have a section for personal thoughts. This app would fill that space.

### User Profile

This app is for people who love to read, and want to actively engage with their books. 
Nice to have in the future: track progress and track number of books read throughout the year.

### Features

Users can enter the app, and create a new book log. They can select a book from a search bar, and start making their reviews. There is an overall rating out of 5. 
Nice to have: star ratings for multiple categories.

## Implementation

### Tech Stack

Technologies and libraries used:

- React
- Node.js
- MySQL
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs
Open Library API
https://openlibrary.org/dev/docs/api/search

### Sitemap
HomePage:

- A search functionality where you can input any book paramater (title, author or ISBN)
- When you click on a book it will redirect you to the Review Page

Review Page

- This page is for creating your review of the book. You can write your journal review and thoughts on the book and rate the book out of 5. 
- The author, title and book cover auto-populate.

Saved Reviews Page

- This page has all of your review entries saved in a list.

### Mockups

See assets folder

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

- Books data
  - Book ID
  - Title
  - Author
  - Cover Image

- Authors data
  - Author ID

- Reviews
  - Book data (Book ID, Author, Book Title)
  - Book Review
  - Book rating out of 5
  - Date created

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- GET books from API for the Home Page
- GET user reviews from database
- POST reviews to the Saved Reviews Page

Response:

[
{
"id": 1,
"bookId": "123",
"title": "The Best",
"author": "Scott F Fitzgerald",
"text": "awesome book",
"rating": 4,
"coverUrl": "https://covers.openlibrary.org/b/id/12366237-M.jpg",
"created_at": "2024-02-24T21:03:48.000Z"
},
{
"id": 2,
"bookId": "OL34381078W",
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"text": "loved this read",
"rating": 4,
"coverUrl": "https://covers.openlibrary.org/b/id/14314120-M.jpg",
"created_at": "2024-02-24T21:36:06.000Z"
},
{
"id": 3,
"bookId": "OL2625431W",
"title": "海辺のカフカ",
"author": "村上春樹",
"text": "nice book",
"rating": 4,
"coverUrl": "https://covers.openlibrary.org/b/id/4982600-M.jpg",
"created_at": "2024-02-25T02:52:35.000Z"
},
]

### Auth
To be implemented

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create client
  - Create react app with boilerplate pages

- Create server
  - express project with routing
  - Install node, express and knex
  - create routes and controllers

- Connect BackEnd to FrontEnd

Pages

- Home page
- Create Review Page
- Saved Reviews Page

Features

- Feature: Review component

## Nice-to-haves

Pages:

Ratings

- 5 star rating for various features of the book (i.e. rate writing, character development, storyline, etc)

Features:

Login
- Implement accounts, authentication and login via google

Create a bookshelf
- A category/folder full of books sorted by read, and to-be-read.

End of year wrap-up
- Takes data and gives a year-in-review

Calendar
- Set date for when you start and finish a book

Sorting
- Sort reviews by genre, author, title, rating

HTTP Methods:

- PUT method for updating reviews
- DELETE method to remove data/reviews
