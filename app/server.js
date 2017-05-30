var express = require("express"),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.put('/upload', upload.single('file'), function (req, res, next) {
  console.log(req.file, req.body);
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  res.json({filesize:100});
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
