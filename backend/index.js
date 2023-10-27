const http = require("http");
const cors = require('cors')

const server = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	const jsonResponse = {
		message: "Ini adalah contoh server JSON dengan Node.js",
		author: "Nama Anda",
	};

	res.end(JSON.stringify(jsonResponse));
});

const port = 4000;

server.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
