module.exports = (io, socket) => (subscriberid) => {
  socket.join(subscriberid);
};
