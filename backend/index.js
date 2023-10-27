import  http from "http"
import cors from "cors";
import { database } from "./db.js";

const server = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

	if (req.url === "/products") {
		res.end(
			JSON.stringify(new database("Halo Ini Dari Backend", "Tidak Ada Nama"))
		);
		res.writeHead(200, "Ok");
	} else {
		res.end(JSON.stringify({ message: "Failed Fetch" }));
		res.writeHead(400, "Bad Request");
	}
});

const port = 4000;

server.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
