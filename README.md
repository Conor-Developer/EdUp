# Ed Up

![Screenshot](https://i.imgur.com/cUOGM1Y.png)

Click here for the live site: https://edup-schools.herokuapp.com/

## Task

[Welcome to Ed Up!](https://edup-schools.herokuapp.com/)

For our final project on the Makers Academy course, we are five students from the March 2022 cohort who have chosen to create a web app that will primarily be used for communication between schools and parents. Parents will be able to login to their accounts to check the latest notices, have a calendar with important dates and events marked by teachers, make payments to pay for any invoices for their child's education with text confirmation and also be able to have a live chat with staff from school.\
\
On the other hand, teachers will be able to login to their account, create notices to be displayed on the noticeboard, delete notices that are no longer applicable, mark important event and dates on the calendar for parents to see, delete marked calendar events, create invoices for parents to pay, and also be able to live chat with parents who wish to speak to them.\
\
This is our team which worked on this project:

- [Baljit](https://github.com/baljitrakhra)
- [Conor](https://github.com/Conor-Developer)
- [Jordan](https://github.com/JordanManu)
- [Joe](https://github.com/jmcnally17)
- [Michael](https://github.com/mcsuGH)

Technologies used:

- [Heroku](https://edup-schools.herokuapp.com/) for hosting our app
- [Trello](https://trello.com/b/hBC2RJnc/final-project) for planning
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB
- [Express](https://expressjs.com/) web framework for Node.js
- [React](https://reactjs.org/) for our frontend
- [Node](https://nodejs.org/en/) for our backend
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for hosting our database
- [MaterializeCSS](https://materializecss.com/) for CSS
- [TailwindCSS](https://tailwindcss.com/) for CSS
- [UnDraw](https://undraw.co/) for illustrations
- [StripeAPI](https://stripe.com/) for our Payment system
- [TwilioAPI](https://www.twilio.com/) for our text confirmation system
- [Jest](https://jestjs.io/) for testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
- [Github](https://github.com/jmcnally17/EdUp) for hosting our code, version control and GithubActions used for CD

## Instructions

Clone this repository to your desired location using `git clone https://github.com/jmcnally17/EdUp.git` .\
\
Make sure you have the most recent update of Node - you can use [Node Version Manager](https://github.com/nvm-sh/nvm) and follow the instructions to install it. Use `nvm install --lts` to install Node and then you can run `npm install` whilst in the main directory in your terminal to install dependencies for the backend. Use `cd client` to go into the client folder and do `npm install --force` to install dependencies for the front end.\
\
You will need to have mongoDB to be able to run this web app in it's intended manner, you can run the commands `brew tap mongodb/brew` and then `brew install mongodb-community@5.0` in order to install mongoDB. Then use `brew services start mongodb-community@5.0` to start MongoDB.\
\
You can run tests by using the command `npm test` to run our jest tests, and then use `cd client` and `npm test` to run React Testing Library.\
\
In order for the website to function, you will need to run the backend server on localhost by using `npm run start-dev` when in the main directory, and then using `cd client` and `npm start` to run the front end. You can then access the webpage by going on `localhost:3000`. To get the website fully functional with the (test) payment system and text confirmation, you will need to register for API keys at [Stripe](https://stripe.com/) and [Twilio](https://www.twilio.com/), you can then create a `.env` file for the following:

- `API_KEY`, your API key for Stripe
- `AUTH_TOKEN`, your Auth token for Twilio
- `ACC_SID`, your account SID for Twilio
- `TWILIO_WHATSAPP`, your Twilio number on WhatsApp
- `WHATSAPP`, your number on WhatsApp

Your .env file should look something like this: (where ... is the rest of the string)

```
API_KEY='sk_test_51...'
AUTH_TOKEN="48..."
ACC_SID="AC..."
TWILIO_WHATSAPP="whatsapp:+14111111111"
WHATSAPP="whatsapp:+441111111111"
```

If you wish to clear the database, use the command `mongo` while in the terminal, you can then use the command `use edup_app` to access the database. You can then use the commands `db.users.drop()` to clear the users, `db.notices.drop()` to clear the notices, `db.payments.drop()` to clear the invoices and also `db.calendars.drop()` to clear the calendar events.\
\
Here are some images to show what our app looks like:
![Screenshot](https://i.imgur.com/CkkrsLz.png)
![Screenshot](https://i.imgur.com/ohengg0.png)

## Features

- Users are able to register
- Users are not able to create an account if the email has already been used to create an existing account
- Passwords are stored encrypted
- Users can log in and log out
- Users are able to change their passwords
- Logging in redirects to Noticeboard
- Logging out redirects to Landing Page
- Logged in users are able to access the navigation bar at the side to navigate around the website
- If you are not logged in, you are redirected to the login page
- Users are split into two different user groups - admins (teachers) and non-admins (parents)
- Users who sign up with the registration page (`/registration`) are classed as admins/teachers
- Teachers are able to create accounts for parents
- Teachers are able to create notices on the noticeboard
- Teachers are able to delete notices from the noticeboard
- Parents are able to see notices that have been created with the date that they were created on
- Parents who try to go on the URL to create notices are redirected back to the noticeboard
- Teachers are able to create calendar events with a title, description and a label
- Teachers are able to delete calendar events
- Parents are able to see calendar events that have been created
- Calendar events with titles that are too long are shortened and then given a `...` at the end of them
- Clicking a event on the calendar brings up the event with it's full title and description
- Clicking the labels at the legend filters the events to only display what is chosen
- Clicking 'Today' takes the user back to the current day/month
- Teachers are able to create invoices by selecting the parent the invoice is for, then adding a title and a amount
- Parents are listed in alphabetical order when selecting them to create the invoice
- Parents are able to see only their invoices
- Parents are able to see the sum of their invoices and be able to pay it in a single transaction, rather than paying one by one
- Users are able to join a chat room by selecting the one they wish to join and speak to others live
- Users who are in the chat room are displayed towards the right
- There is a message in the chatroom for when a user joins or leaves
- Teachers are able to generate QR codes

## Notes

Due to the nature of our product, we do not want people who are not authorised to be able to sign up - and so, only teachers/admins will be able to create user accounts for parents. In order for the general public to see our webpage and experience it, we have included a registration page (`/registration`) which can be used to create a teacher/admin account - this will not be in the final website. This admin account can then be logged into and then be used to create regular accounts intended for parents.
