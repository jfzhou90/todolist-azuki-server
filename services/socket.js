const SocketRoom = {};

export default (io) => {
  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      delete SocketRoom[socket.id];
    });

    socket.on('join', (room) => {
      socket.join(room, () => {
        SocketRoom[socket.id] = room;
      });
    });

    socket.on('updating', (type) => {
      socket.to(`${SocketRoom[socket.id]}`).emit(`${type}`);
    });
  });
};
