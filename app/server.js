var express = require("express"),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    app = express();

app.set('port', (process.env.PORT || 5000));

app.post('/upload', upload.single('file'), function (req, res, next) {
  console.log(req);
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  res.json({message:"Hello!"});
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
