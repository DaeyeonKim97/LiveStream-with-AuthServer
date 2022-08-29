const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:{origin: "*"}
});

// app.set('view engine', 'ejs');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('chat');
//   });
  

io.on('connection',(socket)=>{
    console.log('connected');

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });

    socket.on('leaveRoom', (roomName, name) => {
        io.to(roomName).emit('leaveRoom', roomName, name);

        socket.leave(roomName)
    });

    socket.on('joinRoom', (roomName, name) => {
        console.log('joinRoom',roomName, name)
        io.to(roomName).emit('joinRoom',roomName,name);

        socket.join(roomName)
    });

    socket.on('chat message', (roomName, name, msg)=>{
        io.to(roomName).emit('chat message', name, msg);
    });

})
http.listen(3334, () => {
    console.log('Connect at 3334');
})