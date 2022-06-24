"use strict";
// Create a nodeJs server with typescript
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
app.get('/', (_req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/api/users', (_req, res) => {
    res.send([
        {
            id: 1,
            name: 'John',
            email: ''
        },
        {
            id: 2,
            name: 'Sara',
            email: ''
        }
    ]);
});
const sendEmail = (email) => {
    axios.post('http://localhost:3000/api/email', {
        email: email
    }).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
};
