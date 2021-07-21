const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: '*'
}));

let cache = [];
app.route('/api/favourites')
.get(function (req, res) {
  res.send(cache)
})
.post(function (req, res) {
  cache.push(req.body)
  console.log(cache)
  res.send(cache)
});

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});