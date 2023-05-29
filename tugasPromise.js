const user = [
	{ id: 1, username: "lala", address: "Jakarta" },
	{ id: 2, username: "livi", address: "Surabaya" },
];

const transaction = [
	{
		user_id: 1,
		transaction: [
			{ id: 1, status: "Selesai" },
			{ id: 2, status: "Sedang Dikirim" },
		],
	},
	{
		user_id: 2,
		transaction: [
			{ id: 1, status: "Selesai" },
			{ id: 2, status: "Dibatalkan" },
		],
	},
];

const detailTransaction = [
	{ id: 1, productName: "Kopi Hitam", qty: 3, totalAmount: 3000 },
	{ id: 2, productName: "Gula Pasir", qty: 2, totalAmount: 5000 },
];

const login = (username, handleTransaction) => {
	return new Promise((resolve, reject) => {
		const userData = user.filter((e) => e.username === username);
		setTimeout(() => {
			resolve(userData);
		}, 1000);
	})
		.then((result) => {
			if (result.length > 0) {
				console.log(`Login Berhasil \nSelamat datang ${result[0].username}`);
				handleTransaction(result);
			} else {
				console.log("Gagal! User Tidak Ditemukan");
			}
		})
		.catch((error) => {
			console.log("Error", error);
		});
};

const handleTransaction = (result) => {
	const trData = transaction.find((item) => item.user_id === result[0].id);

	const detailTr = trData.transaction.map((item) =>
		detailTransaction.find((e) => e.id === item.id)
	);

	setTimeout(() => {
		console.log("Transaksi:");
		console.log(trData);
		console.log(detailTr);
	}, 1500);
};

login("lala", handleTransaction);
