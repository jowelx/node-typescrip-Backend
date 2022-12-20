"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (req, res) => {
  res.json({
    message: 'hello world!'
  });
});
app.use('/', _index.default);
app.listen(3000, () => console.log('Server runnuning on port 3000'));