# FeuilleFable

## Overview

What is your app? Brief description in a couple of sentences.

Feuille Fable is a book journalling app. You can use this app to log books you read, track progress and create reading goals. You can also make notes on the books you read to create a better connection with the book and make sure you don't forget the things you loved about the books you read.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

I'm an avid reader and I love to use GoodReads to track my progress. The only issue is that their reviews are public so they don't have a spot for having your own thoughts. This app would fill that space.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

People who love to read, and want to actively engage with their books, track their progress and track number of books read throughout the year.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Users can enter the app, and create a new book log. They can select a book from a search bar, and start making their reviews. There will be an overall 5 star rating.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- Express
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

- Create New Entry

Review Page

- Book review

### Mockups

Please see assets folder

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

I would for the book review page to have a search function where a book title and author show up for the review. I would also like a users information to be saved in the back-end.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- GET: books by id, author
- POST: reviews

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

See: nice to haves

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing

- Connect BackEnd to FrontEnd

- Feature: Home page
- Feature: Review component

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Page:

- Rating Page
- 5 star rating for various features of the book (i.e. writing, character development, storyline)

Feature: Login

- Create POST users login
- Implement login via google

Feature: Book Review

- Have Picture of book show up along with the title/author details

Feature: Create a bookshelf

- A category/folder full of specific books (sorted by genre etc)

Feature: Sorting

- Sort reviews by genre, author, title, rating

Feature: Date Started and Date finished

- Calendar component

HTTP Methods:

- PUT method for updating reviews
- DELETE method to remove data

Design:

- Responsive to all sizes

Database:
Possible connect it to backend database
