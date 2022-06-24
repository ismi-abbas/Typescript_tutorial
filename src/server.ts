// Create a nodeJs server with typescript
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', (_req: any, res: { send: (arg0: string) => any; }) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/api/users', (_req: any, res: { send: (arg0: { id: number; name: string; email: string; }[]) => void; }) => {
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

const sendEmail = (email: string) => {
  axios.post('http://localhost:3000/api/email', {
    email: email
  }).then((res: { data: any; }) => {
      console.log(res.data);

    }
  ).catch((err: any) => {
      console.log(err);
    }
  );
};