# Quora Posts RESTful API

A simple Quora-style web application built using **Node.js, Express.js, EJS, and RESTful APIs**.

Users can create, view, edit, and delete posts.

## Features

- Create a new post
- View all posts
- View individual posts
- Edit existing posts
- Delete posts
- Generate unique IDs using UUID
- Use EJS for dynamic pages
- Use Method-Override for PATCH and DELETE requests

## Technologies Used

- Node.js
- Express.js
- EJS
- UUID
- Method-Override
- HTML
- CSS

## RESTful Routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | /posts | View all posts |
| GET | /posts/new | Create a new post |
| POST | /posts | Add a new post |
| GET | /posts/:id | View a single post |
| GET | /posts/:id/edit | Edit a post |
| PATCH | /posts/:id | Update a post |
| DELETE | /posts/:id | Delete a post |

## How to Run

1. Clone the repository.

2. Install dependencies:

`bash
npm install
