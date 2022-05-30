const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;



app.listen(PORT, (req: any, res: any) => {
  console.log('Listening on port 3000');
});
