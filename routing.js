const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const indexPath = path.join(__dirname, '/public/index.html');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser())

  app.get('/', function(req, res) {
    res.sendFile(indexPath);
  });

  app.all('/journal', function(req, res) {
    fs.readFile('./stub/journal.json', function(err, data) {
      res.json(JSON.parse(data))
    })
  });
}
