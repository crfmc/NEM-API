const { urlencoded } = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

// Use .env PORT or 3000
PORT = process.env.PORT || '3001';
const app = express(); // Instantiate express


// Middleware
app.use(express.json());
app.use(urlencoded({ extended: false }));


/**
 * ROUTES
 */
app.get('/', (request, response) =>
{
  response.status(200)
    .send("Navigate to /user/:id and replace id with your user id");
});

const userRouter = require('./routes/user');

app.use('/user', userRouter);

// Begin listening
app.listen(PORT, () =>
{
  console.log(`Listening on port ${PORT}`);
})