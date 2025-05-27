# Synergize Cycle App Overview

Using React JS, the server is hosted on port 3000 of the computer. To start a development server for a React application, you will need to have Node.js and npm (Node Package Manager) installed on your machine. Once you have these and have navigated to the directory of your project, you'll want to enter 'npm start' in your terminal. This will start up the dev server and open up a new browser window at http://localhost:3000/.

My purpose for writing this program was to provide a way for women to be able to keep track and better understand their cycles. Women's cycles consist of 4 phases that change over the course of ≈28 days- which really changes woman-to-woman, so my web app provides a way for a user to know what stage of their cycle they're in and when they're next cycle will begin when they enter their information.



# Web Page

The main page includes a large header with a title and an image in the center, followed by a form where the user can enter a date and the length of their average menstrual cycle. Upon submitting the form, the web app calculates and displays the next four dates of menstrual phases and their duration, along with the current menstrual cycle phase of the user.

The footer includes a link to an external website that provides more information about menstrual cycles and related topics.

The web app transitions between the main page and the results page dynamically, using React's createRoot method and a conditional rendering statement in the App component. The results page is dynamically created based on the user's input, and it displays information about the next four menstrual phases and their duration. Additionally, the page displays the current menstrual cycle phase of the user, which is also dynamically generated based on their input.

# Development Environment
The code was developed using React, a JavaScript library for building user interfaces. React allows developers to create reusable UI components and build complex, dynamic user interfaces. React's JSX played a large role in helping integrate the HTML with app itself.

Languages Used:
- HTML/CSS
- JavaScript

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [CoderJourney's Getting Started With React](https://www.youtube.com/watch?v=7uf3SCgduPg)
* [React Getting Started by W3 Schools](https://www.w3schools.com/react/react_getstarted.asp#:~:text=Setting%20up%20a%20React%20Environment,of%20create%2Dreact%2Dapp%20)
* [Getting Started by React](https://create-react-app.dev/docs/getting-started/)

# Future Work

* Add more pages based on user's phase (workouts, recipes, information about each phase, etc.)
* Allow user to input more information in order to return more tailored responses
* Make the page more dynamic/interactive
