var express     =    require("express");
var bodyParser  =    require('body-parser');
var multer      =    require('multer');
var app         =    express();
var done        =    false;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(multer({ dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename+Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
        done=true;
    }
}));

app.post('/api/photo',function(req,res){
    if(done==true){
        console.log(req.files);
        //res.end("File uploaded.");
    }
});

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendfile("index.html");
});



app.listen(3000,function(){
    console.log("Working on port 3000");
});