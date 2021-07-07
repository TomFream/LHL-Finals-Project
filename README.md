# QuizStack
QuizStack is a quiz-based study app for developers and tech professionals. Choose from a variaty of quiz topics, and create custom quiz playlists to tailor your learning experience.

- Front-end: React, Material-Ui
- Back-end: Rails, PostgreSQL

## Setup

First, fork this repository so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `rails db:setup` to create the databases (called rails_project_development by default). Run `rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

In the browser, you can click on the button and see the data get loaded.

## Final Product

![Homepage]()
![Quiz Page]()
![Results Page]()
![User Page]()