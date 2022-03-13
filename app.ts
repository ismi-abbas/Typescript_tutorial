const express = require("express");
const app = express();

// Start a server
const port = process.env.PORT || 5000;

app.listen(port, (req: any, res: any) => {
	res.send(`Server started on port ${port}`);
});