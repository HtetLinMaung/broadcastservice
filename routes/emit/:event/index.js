const { brewBlankExpressFunc } = require("code-alchemy");
const { default: server } = require("starless-server");

module.exports = brewBlankExpressFunc(async (req, res) => {
  const { event } = req.params;
  const { payload, rooms } = req.body;
  const io = server.getIO();
  if (rooms) {
    io.to(rooms).emit(event, payload || {});
  } else {
    io.emit(event, payload || {});
  }

  res.json({
    code: 200,
    message: `${event} emitted successfully`,
  });
});
