console.log("buliding chat app")
var io=require('socket.io')(3000)

var users={};

io.on('connection',socket=>{
       socket.emit('chatmessage','hellowrld')
       socket.on('newuserjoined',name=>{
           console.log(name,"joined")
           users[socket.id]=name;
           console.log(socket.id)
           socket.broadcast.emit('userjoined',name)
       })
    
       socket.on('sendcht',msg=>{
           socket.broadcast.emit('chatmessage',{message:msg,name:users[socket.id]})
           
       })
})
