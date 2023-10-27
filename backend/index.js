import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/product", (req, res) => {
	res.json({
		id: 1,
		nama: "sunlight",
		deskripsi: "produk sunlight untuk cuci piring",
		harga: 10000,
	});
});

app.listen(4000, () => {
	console.log("Server is listening on port 4000");
});
