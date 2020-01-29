var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

serv.listen(process.env.PORT);
console.log("Server is listening on port " + process.env.PORT);


            function insert(num){
                document.form.textview.value=document.form.textview.value+num
            }
            
            function equal() {
                var exp = document.form.textview.value;
                if(exp){
                document.form.textview.value = eval(exp)
                }
            }
            function clean(){
                document.form.textview.value="";
            }
