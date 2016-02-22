var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var path = require('path');

var fs= require("fs");

var curr_fileName = "";

app.use(require("express").static(__dirname));

var x=function base64_encode(file) {

    var bitmap = fs.readFileSync(file);

    return new Buffer(bitmap).toString('base64');

}

io.on('connection', function(socket){

	console.log("a new user connected");

	setInterval(function()
	{      
		try{
		var Fname = JSON.parse(fs.readFileSync("/home/pi/images/current.json")).date + ".jpg" ;
  		if(Fname != curr_fileName)
		{
		 curr_fileName = Fname ;
		 var encoded= x(path.join("/home/pi/images/",Fname));
		 io.emit('newImage',encoded);
		}
		}catch(err){
		console.log(err);
		}
	} ,100);

})	

io.on('end',function(){
	console.log("disconnected");
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});
