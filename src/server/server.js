const express = require('express');

const app = express();

//DB STUFF GOES HERE

app.get('/', (req, res) => {
	console.log("Server received request!");
	return res.send("Response from server.");
});

app.listen(8081, () => {
	console.log("Server is listening on port 8081");
});