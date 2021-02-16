var express = require('express');
var app = express();

module.exports = app;
var server = app.listen(4000);
//le richieste ad http vengono elaborate da express


app.get("/mainpage.js",function(req, resp){
  resp.sendFile(__dirname+"/mainpage.js")
  console.log("t'appo ho ricevuto una richiesta chat");
  resp.end;
});

app.get("/mainpage.html",function(req, resp){
  resp.sendFile(__dirname+"/mainpage.html")
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



  app.get("/socket.io.js",function(req, resp){
    resp.sendFile(__dirname+"/socket.io.js")
    console.log("t'appo ho ricevuto una richiesta chat");
    resp.end;
  });
  
  