const express=require('express')
const app=express()
const http=require('http');
const server=http.createServer(app)
const socket=require('socket.io')
const io=socket(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
})
const cors=require('cors')
app.use(cors())
io.on('connection',(socket)=>{
    console.log('user connected');
    socket.emit('data','hjdhjsdjsd')
})

server.listen(4000,()=>{
    console.log('server is listening at port 4000');
})