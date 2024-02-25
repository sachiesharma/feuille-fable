# FeuilleFable

## Overview

What is your app? Brief description in a couple of sentences.

Feuille Fable is a book journalling app. You can use this app to log books you read and your thoughts on each one. You can also make notes on the books you read to create a better connection with the book and make sure you don't forget the things you loved about the books you read.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

I'm an avid reader and I love to use GoodReads to track my progress. The only issue is that their reviews are public and they don't have a section for personal thoughts. This app would fill that space.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

People who love to read, and want to actively engage with their books. Nice to have: track progress and track number of books read throughout the year.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Users can enter the app, and create a new book log. They can select a book from a search bar, and start making their reviews. There will be an overall rating out of 5. Nice to have: star ratings.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

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

List any external sources of data that will be used in your app.

- I will be using an API
- https://openlibrary.org/dev/docs/api/search

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

HomePage:

- There will be search functionality where you can input any book paramater (title or author) and a list of books will show up to choose from
- When you click on a book it will redirect you to the review page

Review Page

- This page is for creating your review of the book. You can write your journal review and thoughts on the book and rate the book out of 5. The author and title should auto-populate the information.

Saved Reviews Page

- This page should have all of your review entries saved in a list.

### Mockups

Please see assets folder

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

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

See: nice to haves

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

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Pages:

Rating Page

- 5 star rating for various features of the book (i.e. rate writing, character development, storyline, etc)

Features:

Rate score

- Turn the number scale into a star rating feature

Login

- Implement accounts, authentication and login via google

Create a bookshelf

- A category/folder full of books sorted by read, and to-be-read.

End of year wrap-up

- Takes data and gives a year-in-review

Survey Feature

-

Sorting

- Sort reviews by genre, author, title, rating

Date Started and Date finished

- Calendar component

HTTP Methods:

- PUT method for updating reviews
- DELETE method to remove data/reviews

Design:

- Responsive to all sizes
