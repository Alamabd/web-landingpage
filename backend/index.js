const http = require("http");

const server = http.createServer((req, res) => {
	// Set header untuk memberi tahu klien bahwa respons adalah JSON
	res.setHeader("Content-Type", "application/json");

	// Data JSON yang akan direspons
	const jsonResponse = {
		message: "Ini adalah contoh server JSON dengan Node.js",
		author: "Nama Anda",
	};

	// Merubah data JSON menjadi string dan mengirimkannya sebagai respons
	res.end(JSON.stringify(jsonResponse));
});

const port = 4000;

server.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
