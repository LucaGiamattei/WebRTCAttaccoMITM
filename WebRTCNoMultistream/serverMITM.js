
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"]
  }
});



io.on('connection', function(socket){
  console.log('Qualcuno è entrato nella chat!');
  
  socket.on('chat message', function(msg){
    //invio in broadcast
 	io.emit('chat message', msg);
   
  });
}); 




app.get("/mainpageMITM.js",function(req, resp){
  resp.sendFile(__dirname+"/mainpageMITM.js")
  console.log("t'appo ho ricevuto una richiesta chat");
  resp.end;
});

app.get("/mainpageMITM.html",function(req, resp){
  resp.sendFile(__dirname+"/mainpageMITM.html")
  console.log("t'appo ho ricevuto una richiesta chat");
  resp.end;
});

app.get("/mainpageHack.js",function(req, resp){
  resp.sendFile(__dirname+"/mainpageHack.js")
  console.log("t'appo ho ricevuto una richiesta chat");
  resp.end;
});

app.get("/mainpageHack.html",function(req, resp){
  resp.sendFile(__dirname+"/mainpageHack.html")
  console.log("t'appo ho ricevuto una richiesta chat");
  resp.end;
});



app.get("/janusFolder/janus.js",function(req, resp){
    resp.sendFile(__dirname+"/janusFolder/janus.js")
    console.log("t'appo ho ricevuto una richiesta chat");
    resp.end;
  });
  
app.get("/css/demo.css",function(req, resp){
    resp.sendFile(__dirname+"/css/demo.css")
    console.log("t'appo ho ricevuto una richiesta chat");
    resp.end;
  });



http.listen(3000, function(){
  console.log('Il server è in ascolto su http://localhost:3000');
});


