const { Server } = require("socket.io");

const io = new Server({});

io.on("connection", (socket) => {
	console.log("connected NEW SOCKET : ", socket.id);

	socket.on("gyroscope", (data) => {
		let { x, y, z } = JSON.parse(data);
		socket.emit("response", `Gyroscope =  x: ${x} y: ${y} z: ${z}`);
	});

	socket.on("accelerometer", (data) => {
		let { x, y, z } = JSON.parse(data);
		socket.emit("response", `Accelerometer =  x: ${x} y: ${y} z: ${z}`);
	});

	socket.on("disconnect", (reason) => {
		console.log(reason);
		console.log(socket.id, "  :  Disconnected");
	});
});

io.listen(9977);
